import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMusic } from '../../actions/musicActions';

import RadioSounds from './RadioSounds.jsx';
import './RadioSounds.css';
import growlers from '../../photos/growlers.jpg';

class Music extends Component {
    state = { break: false }
    response = {}
    componentDidMount() {
        this.props.fetchMusic();
        // var endpoint = //"http://localhost:5000/spotifyPlaylists"
        // "https://desolate-island-36268.herokuapp.com/spotifyPlaylists";

        // fetch(endpoint)
        // .then(res => res.json())
        // .then(res => {
        //     this.setState({
        //         playlist: res.body.items
        //     })
        // })
        // .catch(error => {
        //     console.log(error)
        // })
    }

    render() { 
        window.scroll(0,0)
        let items = []
        
        if(this.props.playlists) {
            let len = this.props.playlists.length;
            if (len > 10) {
                len = 10;
            }
            for (let i = 0; i < len; i++) {
                    
                items.push(
                    <RadioSounds key={i} playlist={this.props.playlists[i]} />
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

Music.propTypes = {
    fetchMusic: PropTypes.func.isRequired,
    playlists: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    playlists: state.musicReducer.playlists
});
 
export default connect(mapStateToProps, { fetchMusic })(Music);