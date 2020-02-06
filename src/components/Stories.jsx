import React, { Component } from 'react';

class Stories extends Component {
    state = {}
    render() {
        return (
            <div class="container">
                Stories
            </div>
        );
    }

    componentDidMount() {
        const allPlaces = [];
        const endpoint =
            "http://localhost:3000/api/v1/users";
        fetch(endpoint)
            .then(data => data.json())
            .then(results => {
                allPlaces.push(...results)
                console.log(allPlaces)
            })
            .catch(error => console.log(error));
    }
}

export default Stories;