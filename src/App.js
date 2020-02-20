import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Stories from './components/Stories';
import NotFound from './components/NotFound'
import ToDo from './components/ToDo';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import image from './Beach.jpg'

class App extends Component {

  state = {
    storyValue: null
  }

  componentDidMount() {
    const allPlaces = [];
    const endpoint =
      "http://localhost:5000/stories";
    console.log(this.state)
    if (this.state.storyValue === null) {
      fetch(endpoint)
        .then(data => data.json())
        .then(results => {
          allPlaces.push(results)
          console.log(results)
          this.setState({ storyValue: results })
        })
        .catch(error => console.log(error));
    }
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <nav class="navbar navbar-expand-lg navbar-light">
              <Link to="/">
                <a class="navbar-brand">Website</a>
              </Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <div class="navbar-nav">
                  <Link to="/personal">
                    <a class="nav-link active">Home</a>
                  </Link>
                  <Link to="/stories">
                    <a class="nav-link active">Stories</a>
                  </Link>
                  <Link to="/todo">
                    <a class="nav-link active">ToDo</a>
                  </Link>
                </div>
              </div>
            </nav>
            <Switch>
              <Route exact path="/personal" component={ToDo} />
              <Route exact path="/" id='hello' component={ToDo} />
              <Route path="/stories" id='hello' component={() => <Stories value={this.state.storyValue} image={image} />} />
              <Route path="/todo" component={ToDo} />
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
