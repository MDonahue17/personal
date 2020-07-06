import { FETCH_STORIES } from './types';


export const fetchStories = () => dispatch => {
    let endpoint = //"http://localhost:5000/stories"
        "https://desolate-island-36268.herokuapp.com/stories";
    fetch(endpoint)
    .then(data => data.json())
    .then(res => dispatch({
        type: FETCH_STORIES,     
        payload: res
    }))
    .catch(error => console.log(error));
}