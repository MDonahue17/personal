import React, { Component } from 'react';
import './RadioSounds.css';

class RadioSounds extends Component {
    state = {  }
    render() { 
        let name = ""
        if (this.props.playlist !== null) {
            name = ""
            if (this.props.playlist.name.length >= 35) {
                name = this.props.playlist.name.substr(0, 32) + "..."
            } else {
                name = this.props.playlist.name
            }
        }
        return ( 
            <div class="card radiosound-card">
                <a href={this.props.playlist.external_urls.spotify}>
                    <img class="radio-img" src={this.props.playlist.images[0].url} alt="..." />
                </a>
                <div class="card-body radio-card-body">
                    <p class="card-font">stupid sounds</p>
                    <a href={this.props.playlist.external_urls.spotify}>
                        <p class="card-name title">{name}</p>
                    </a>
                    <p class="card-font description">{this.props.playlist.description}</p>
                    <a href={this.props.playlist.external_urls.spotify}><p class="listen-now">LISTEN NOW</p></a>
                    
                </div>
                
            </div>
         );
    }
}
 
export default RadioSounds;