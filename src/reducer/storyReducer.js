import { FETCH_STORIES } from './../actions/types';

let initState = {
    stories: [],
} 

export default function(state = initState, action) {
    switch(action.type){
        case FETCH_STORIES:
            return {
                ...state, 
                stories: action.payload
            }
        default:
            return state;

    }
}