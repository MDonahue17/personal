import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchStories } from '../actions/storyActions';

import StoryInfo from './StoryPage/StoryInfo/StoryInfo';
import Story from './StoryPage/Story/Story';
import Author from './StoryPage/Author/Author';
import '../App.css';

class Stories extends Component {
    state = { value: null, id: 0 }

    componentDidMount() {
        this.props.fetchStories()
        // let endpoint = //"http://localhost:5000/stories"
        // "https://desolate-island-36268.herokuapp.com/stories";
        // fetch(endpoint)
        // .then(data => data.json())
        // .then(results => {
        //     console.log(results)
        //     this.setState({ value: results, id: 0 })
        // })
        // .catch(error => console.log(error));
    }

    
    receiveNumberBack = (id) => {
        this.setState({ id: id })
    }

    render() {
        if (this.props.stories == []) {
            return (
                <div class="minHeight">
                    <Author image={this.props.image} />
                </div>

            );
        } else if (this.state.id == 0) {
            let storyInfos = []
            for (let i = 1; i <= this.props.stories.length; i++) {
                storyInfos.push(
                    <StoryInfo key={i} info={this.props.stories[i - 1]} idFunction={this.receiveNumberBack} id={i} />
                )
            }
            return (
                <div class="minHeight">
                    <Author image={this.props.image} />
                    <div class="card-container">
                        {storyInfos}
                    </div>
                </div>
            );
        } else {
            let styles = {
                marginBottom: '15px',
                marginTop: '10px',
                marginLeft: '25px'
            }
            return (
                <div class="minHeight">
                    <div class="container backButton" style={styles}>
                        <button onClick={() => {
                            this.setState({ id: 0 });
                            document.body.scrollTop = document.documentElement.scrollTop = 0;
                        }} class="btn btn-lg btn-primary">Back
                        </button>
                    </div>
                    <Story doc={this.props.stories[this.state.id - 1].doc.data} />
                    <div class="container backButton">
                        <button onClick={() => {
                            this.setState({ id: 0 });
                            document.body.scrollTop = document.documentElement.scrollTop = 0;
                        }} class="btn btn-lg btn-primary">Back
                        </button>
                    </div>
                </div>
            );
        }

    }
    // <div><StoryInfo props={this.state.value[0]}/></div>
    //                 <div dangerouslySetInnerHTML={{ __html: this.state.value[0].data }} />

    
}


Stories.propTypes = {
    fetchStories: PropTypes.func.isRequired,
    stories: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    stories: state.storyReducer.stories
});
 
export default connect(mapStateToProps, { fetchStories })(Stories);
