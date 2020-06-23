import React, { Component } from 'react';
import './Playlist.css';

class Playlist extends Component {
    state = {
        url: null
    }
    render() {
        if (this.state.url !== null) {
            let name = ""
            if (this.props.data.name.length >= 35) {
                name = this.props.data.name.substr(0, 32) + "..."
            } else {
                name = this.props.data.name
            }
            return (
                // <div></div>
                <div class="card playlistCard">
                    <div class="photoDiv">
                        <img src={this.state.url} class="card-img-top playlistImg" alt="..." />
                    </div>
                        
                        <div class="card-boy">
                            <div class="container">
                                <h5>{name}</h5>
                                {/* <p class="card-text">{this.props.data.description}</p>
                                <p class="card-text">{this.props.data.external_urls.spotify}</p> */}
                            </div>
                        </div>
                    </div>

            );


        } else {
            return (<div></div>)
        }

    }

    componentDidMount() {
        if (this.state.url == null) {
            if(this.props.data.images[0].url != undefined) {
                this.setState({ url: this.props.data.images[0].url })
            }
        }
    }
}

export default Playlist;