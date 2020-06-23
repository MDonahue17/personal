import React, { Component } from 'react';
import Playlist from './Playlist';
import RadioSounds from './RadioSounds.jsx';
import './RadioSounds.css';
import growlers from '.././growlers.jpg';

class Music extends Component {
    state = {  }
    render() { 
        window.scroll(0,0)
        let items = []
        if (this.props.playlist != undefined) {
            
            let len = this.props.playlist.length;
            if (len > 10) len = 10;
            for (let i = 0; i < len; i++) {
                // items.push(
                //     <Playlist data={this.props.playlist[i]} />
                // )
                items.push(
                    <RadioSounds playlist={this.props.playlist[i]} />
                )
            }
        }
        return ( 
            <div>
                <div class="growlers-card">
                    <div class="growlers-container">
                        <img class="growlers" src={growlers}/>
                        <div class="musicByMike">music by me, Mike.</div>
                    </div>
                    
                </div>
                <div class="card-flex">
                    {items}
                </div> 
            </div>
            
        );
    }
}
 
export default Music;