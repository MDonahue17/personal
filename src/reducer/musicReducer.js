import { FETCH_PLAYLISTS } from './../actions/types';

let initState = {
    playlists: [],
} 

export default function(state = initState, action) {
    switch(action.type){
        case FETCH_PLAYLISTS:
            return {
                ...state, 
                playlists: action.payload
            }
        default:
            return state;

    }
}