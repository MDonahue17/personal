import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Stories from './components/Stories';
import NotFound from './components/NotFound'
import * as serviceWorker from './serviceWorker';
import ToDo from './components/ToDo';



ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
