import React, { Component } from 'react';
import Photos from './Photos';

class Photography extends Component {
    state = {  }
    render() { 
        let items = []
        for(let i = 0; i < 7; i++) {
            items.push(<Photos id={i}/>)
        }
        return ( 
            <div class="page-container">
                {items}
            </div>
         );
    }
}
 
export default Photography;