import React, { Component } from 'react';
import story from '.././stories-1.jpg';
import music from '.././Tyler.JPG';
import photo from '.././ross.jpg';
import worklife from '.././worklife.jpg';
import clothing from '.././clothing.jpg';
import bike from '.././bike.jpg';
import './HomePage.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'


class HomeDivBox extends Component {
    state = {  }
    render() {
        let imgVal = music 
        let route = ""
        if(this.props.name == "Stories") {
            imgVal = story
            route = "/stories"
        } else if (this.props.name == "Photography") {
            imgVal = photo
            route = "/photography"
        } else if (this.props.name == "Music") {
            imgVal = music
            route = "/music"

        } else if (this.props.name == "Resume") {
            imgVal = worklife
            route = "/resume"

        } else if (this.props.name == "Clothing") {
            imgVal = clothing
            route = "/clothing"
        } else {
            imgVal = bike
            route = "/exercise"

        }
        return ( 
            <div>
                <Link to={route}>
                    <img class="boxPhoto" src={imgVal}/>
                </Link>
                <div class="boxText">
                    <p>{this.props.name}</p>
                </div>
            </div> );
    }
}
 
export default HomeDivBox;