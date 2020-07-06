import { FETCH_PLAYLISTS } from './types';


export const fetchMusic = () => dispatch => {
    var endpoint = //"http://localhost:5000/spotifyPlaylists"
    "https://desolate-island-36268.herokuapp.com/spotifyPlaylists";

    fetch(endpoint)
    .then(res => res.json())
    .then(res => {
        dispatch( {
            type: FETCH_PLAYLISTS,
            payload: res.body.items
        })
    })
    .catch(error => {
        console.log(error)
    })
}