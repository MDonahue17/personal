import React, { Component } from 'react';
import './StoryInfo.css';
import {Link} from 'react-router-dom'

class StoryInfo extends Component {
    render() {
        window.scroll(0,0)
        let styles = {
            width: '25%'
        }
        if(this.props.info.length == 1) {
            styles.width = '100%'
        }
        if(this.props.info.length == 2) {
            styles.width = '50%'
        }
        if(this.props.info.length == 3) {
            styles.width = '33%'
        }
        if(window.screen.width < 900) {
            styles.width = '100%'
        }
        return (
            <div class="card card-stories" style={styles}>
                <hr />
                <div class="card-body title-author">
                    <div>
                        <h3>{this.props.info[this.props.id - 1].meta.data.name}</h3>
                        <h6>By: Michael Donahue</h6>
                    </div>
                </div>
                <div class="card-body">
                    <div>
                        <button onClick={() => {document.body.scrollTop = document.documentElement.scrollTop = 0;
                            this.props.idFunction(this.props.id)}} class="btn btn-primary">See Story</button>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
    //{this.props[0].meta.data.name}


}

export default StoryInfo;