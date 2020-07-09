import { FETCH_PHOTOS } from './../actions/types';

let initState = {
    photos: [],
} 

export default function(state = initState, action) {
    
    switch(action.type){
        
        case FETCH_PHOTOS:
            return {
                ...state, 
                photos: action.payload
            }
        default:
            return state;

    }
}