import React, { Component } from 'react';
import List from './List';
import '../App.css';

class ToDo extends Component {
    state = { 
        items: ["Begin making the api", "create the footer with ig, github, vsco", "check if vsco has an api and connect your account",
                "Spotify", "Add stories to the DB", "Style the front page", "full connection from DB to Server to webpage", 
                "Move api from local host to cloud server"]
     }

    render() { 
        
        return ( 
            <div class="container minHeight">
                <List items={this.state.items} />
            </div>
            
         );
    }
}
 
export default ToDo;