import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducer/index';

const initState = {
    stories: [],
    playlists: []
}

const middleware = [thunk]
const googleMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, 
    initState, 
    compose(
        applyMiddleware(...middleware), 
        /*googleMiddleware*/
    )
    )

export default store