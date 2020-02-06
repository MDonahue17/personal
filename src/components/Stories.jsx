import React, { Component } from 'react';
import Footer from './Footer';

class Stories extends Component {
    state = {value: "not loaded"}
    render() {
        return (
            <div class="container">
                Stories
                <h1>{this.state.value}</h1>
                <Footer />
            </div>
        );
    }

    componentDidMount() {
        const allPlaces = [];
        const endpoint =
            "http://localhost:3000/";
        console.log(this.state)
        if(this.state.value === "not loaded") {
            fetch(endpoint)
            .then(data => data.json())
            .then(results => {
                allPlaces.push(results)
                console.log(results)
                this.setState({value: results})
            })
            .catch(error => console.log(error));
        }
        
    }
}

export default Stories;