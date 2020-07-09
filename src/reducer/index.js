import { combineReducers } from 'redux';
import storyReducer from './storyReducer';
import musicReducer from './musicReducer';
import photoReducer from './photoReducer';

export default combineReducers({
    storyReducer: storyReducer,
    musicReducer: musicReducer,
    photoReducer: photoReducer
}); 