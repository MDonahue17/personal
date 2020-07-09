import React, { Component } from 'react';
import './Photo.css'

class Photos extends Component {
    state = {  }
    render() { 
        
            return (
                <div class="photoBox">
                    <img class="img" src={this.props.photoLink} />
                </div>

            )
        
    }
}
 
export default Photos;