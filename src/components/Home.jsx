import React, { Component } from 'react';
import Playlist from './Playlist';
import HomeDiv from './HomeDiv';
import PlaylistOnDisplay from './PlaylistOnDisplay.jsx'
import WorkoutDay from './WorkoutDay'
import './Home.css'

class Home extends Component {
    




    render() {
        if (this.props.playlists != undefined) {
            let items = []
            let len = this.props.playlists.length;
            if (len > 10) len = 10;
            for (let i = 0; i < len; i++) {
                items.push(
                    <Playlist data={this.props.playlists[i]} />
                )
            }
            return (
                <div class="minHeight doodle">
                    <div>
                        <HomeDiv />
                    </div>
                    <div>
                        <p class="Playlist-font">Workout</p>
                        <WorkoutDay workout={this.props.workout} />
                    </div>
                    <div class="spotify-background">
                        <p class="Playlist-font">Music</p>
                        <div>
                            <PlaylistOnDisplay />
                        </div>
                        <div class="card-deck playlistCol">
                            {items}
                        </div>
                    </div>



                </div>
            );
        } else {
            return (
                <div class="minHeight home-screen">
                    <div>
                        <HomeDiv />
                    </div>
                    <div>
                        <WorkoutDay workout={this.props.workout} />
                    </div>
                </div>
            );
        }

    }

}





export default Home;