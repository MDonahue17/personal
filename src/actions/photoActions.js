//Fetch photos from flickr

import { FETCH_PHOTOS } from './types';


export const fetchPhotos = () => dispatch => {
    
    var endpoint = //"http://localhost:5000/spotifyPlaylists"
    "https://desolate-island-36268.herokuapp.com/flickr/fetch_photos";

    fetch(endpoint)
    .then(res => res.json())
    .then(res => {
        let data = createLinks(res);
        console.log(data)
        dispatch( {
            type: FETCH_PHOTOS,
            payload: data
        })
    })
    .catch(error => {
        console.log(error)
    })
}

function createLinks(flickrData) {
    let res = []

    flickrData = JSON.parse(flickrData.text).photos.photo;
    console.log(flickrData)
    for(let value in flickrData) {
        console.log(value)
        let farm = flickrData[value].farm;
        let serverId = flickrData[value].server
        let id = flickrData[value].id;
        let secret = flickrData[value].secret;

        let url = `https://farm${farm}.staticflickr.com/${serverId}/${id}_${secret}_z.jpg`;
        res.push(url);
    }

    return shuffle(res);
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}