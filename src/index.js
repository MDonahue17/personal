import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Stories from './components/Stories';
import NotFound from './components/NotFound'
import * as serviceWorker from './serviceWorker';

const routing = (
    <div>
        <Router>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/">
                        <a class="navbar-brand">Website</a>
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <div class="navbar-nav">
                            <Link to="/personal">
                                <a class="nav-link">Home</a>
                            </Link>
                            <Link to="/stories">
                                <a class="nav-link">Stories</a>
                            </Link>
                        </div>
                    </div>
                </nav>
                    <Switch>
                        <Route exact path="/personal" component={App} />
                        <Route exact path="/" component={App} />
                        <Route path="/stories" component={Stories} />
                        <Route component={NotFound} />
                    </Switch>
            </div>
        </Router>
    </div>


)

ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
