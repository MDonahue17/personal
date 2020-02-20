import React, { Component } from 'react';
import Footer from './Footer';
import StoryInfo from './StoryPage/StoryInfo/StoryInfo';
import Story from './StoryPage/Story/Story';
import Author from './StoryPage/Author/Author';
import '../App.css';

class Stories extends Component {
    state = { value: null, id: 0 }

    receiveNumberBack = (id) => {
        this.setState({ id: id })
        console.log(id)
    }

    render() {
        if (this.state.value == null) {
            return (
                <div class="minHeight">
                    <Author image={this.props.image} />
                </div>

            );
        } else if (this.state.id == 0) {
            let storyInfos = []
            for (let i = 1; i <= this.state.value.length; i++) {
                storyInfos.push(
                    <StoryInfo info={this.state.value} idFunction={this.receiveNumberBack} id={i} />
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
                    <Story doc={this.state.value[this.state.id - 1].doc.data} />
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

    componentDidMount() {
        const endpoint =
            "http://localhost:3000/stories";

        if (this.props.value === null || this.props.value === undefined) {
            fetch(endpoint)
                .then(data => data.json())
                .then(results => {
                    console.log(results)
                    this.setState({ value: results })
                })
                .catch(error => console.log(error));
        } else {
            this.setState({ value: this.props.value })
            console.log(this.state.value)
            console.log("HELLO")
        }
    }
}

export default Stories;