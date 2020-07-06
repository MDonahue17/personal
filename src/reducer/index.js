import { combineReducers } from 'redux';
import storyReducer from './storyReducer';
import musicReducer from './musicReducer';

export default combineReducers({
    storyReducer: storyReducer,
    musicReducer: musicReducer
}); 