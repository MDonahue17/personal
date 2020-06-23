import React, { Component } from 'react';
import image from './../home.jpg'
import image_mobile from './../homeMobile.jpg'
import './HomeDiv.css';

class HomeDiv extends Component {
    state = {}
    render() {
        return (
            <div class="contain">
                <div class="homeDiv">
                    <img class="home" src={image} />
                    <img class="home-mobile" src={image_mobile} />
                </div>
                <div class="Michael-Div">
                    <h1 class="Michael-font">MICHAEL</h1>
                </div>
            </div>
        );
    }
}

export default HomeDiv;