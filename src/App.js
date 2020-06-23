import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Music from './components/Music';
import Photography from './components/Photography';
import Stories from './components/Stories';
import NotFound from './components/NotFound'
import Workout from './components/Workout';
import Resume from './components/Resume';
import Clothing from './components/Clothing';
import Home from './components/Home';
import FrontPage from './components/FrontPage';
import HomePage from './components/HomePage';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import image from './Beach.jpg'

class App extends Component {

  state = {
    frontPage: true,
    storyValue: null,
    playlistData: null,
    workoutData: {
      SunThur: {
        title: "Legs + Abs",
        powerLifts: [["Squats", "5x5 + 1x5"]],
        circuit: [["Hip thrust", 10], ["DDL", 10], ["Calf Raise", 15], ["Stiff Leg DB DL", 10], ["Wall Sit", -1]],
        cardio: false,
        abs: true
      },
      MonFri: {
        title: "Push + Cardio",
        powerLifts: [["Bench Press", "3x8 + 2x4"], ["OHP", "3x8"]],
        circuit: [["Incline DB", 10], ["Arnold Press", 10], ["Skull Crusher", 15], 
        ["Flys", 10], ["Kickback", 10], ["Side Ext.", 10]],
        cardio: true,
        abs: false
      },
      TueSat: {
        title: "Pull + Cardio",
        powerLifts: [["Rows", "3x8 + 3x4"], ["SLDL", "3x8"]],
        circuit: [["DB Row", 10], ["Bar Curls", 10], ["Hammer Curls", 15], 
        ["Shrugs", 10], ["Chest Down Flys", 10], ["16s", -1]],
        cardio: true,
        abs: false
      },
      cardio: [[<h5>Run | 60% - 1min | 90% - 30sec</h5>], [<h5>Bike | HIIT</h5>], [<h5>Stair Stepper | HIIT</h5>]],
      abs: [<div><h5>Weighted Ab Machine | 2x15</h5><h5>Roll Up | 10</h5><h5>Side Weight Lift | 10</h5><h5>Jack Knife | 10</h5></div>]
    }
  }

  componentDidMount() {
    var endpoint = //"http://localhost:5000/spotifyPlaylists"
    "https://desolate-island-36268.herokuapp.com/spotifyPlaylists";
    if (this.state.playlistData === null) {
    fetch(endpoint)
      .then(data => data.json())
      .then(results => {
        console.log(results.body.items)
        this.setState({ playlistData: results.body.items })
      })
      .catch(error => console.log(error));
    }

    endpoint = //"http://localhost:5000/stories"
      "https://desolate-island-36268.herokuapp.com/stories";
    console.log(this.state)
    if (this.state.storyValue === null) {
      fetch(endpoint)
        .then(data => data.json())
        .then(results => {
          console.log(results)
          this.setState({ storyValue: results })
        })
        .catch(error => console.log(error));
    }
  }

  enterState = (string) => {
    if(string === "ENTER") {
      this.setState({frontPage: false, location: "/"})
    }
    
  }

  render() {
    // if(this.state.frontPage == true) {
    //   return (
    //     <FrontPage enterSite={this.enterState}/>
    //   )
    // }
    return (
      <div>
        <Router>
          <div>
            <nav class="navbar navbar-expand-lg navbar-light">
              <Link to="/">
                <a class="navbar-brand display-4">Personally Michael</a>
              </Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <div class="navbar-nav">
                  <Link to="/stories">
                    <a class="nav-link">Stories</a>
                  </Link>
                  <Link to="/photography">
                    <a class="nav-link">Photography</a>
                  </Link>
                  <Link to="/music">
                    <a class="nav-link">Music</a>
                  </Link>
                  <Link to="/resume">
                    <a class="nav-link">Resume</a>
                  </Link>
                  {/* <Link to="/clothing">
                    <a class="nav-link">Clothing</a>
                  </Link> */}
                  <Link to="/exercise">
                    <a class="nav-link">Exercise</a>
                  </Link>
                </div>
              </div>
            </nav>
            <Switch>
              <Route exact path="/" component={() => <HomePage/>} />
              <Route path="/stories" id='hello' component={() => <Stories value={this.state.storyValue} image={image} />} />
              <Route path="/exercise" component={() => <Workout workout={this.state.workoutData} />} />
              <Route path="/music" component={() => <Music playlist={this.state.playlistData} />} />
              <Route path="/clothing" component={() => <Clothing />} />
              <Route path="/photography" component={() => <Photography />} />
              <Route path="/resume" component={() => <Resume />} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>

        <Footer />
      </div>
    );
  }


}

export default App;
