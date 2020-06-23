import React, { Component } from 'react';
import './Photo.css'
import photo1 from '../Saved Pictures/Jon-Ross-Joon-14.jpg';
import photo2 from'../Saved Pictures/wash-mon-1.jpg';
import photo3 from '../Saved Pictures/cj-5.jpg';
import photo4 from '../Saved Pictures/Jon-Ross-Joon-6.jpg';
import photo5 from '../Saved Pictures/jr-3.jpg';
import photo6 from '../Saved Pictures/cj-3.jpg';
import photo7 from '../Saved Pictures/woman-1.jpg';

class Photos extends Component {
    state = {  }
    render() { 
        let title = photo7
        if(this.props.id == 0) {
            title = photo1
        }
        if(this.props.id == 1) {
            title = photo2
        }
        if(this.props.id == 2) {
            title = photo3
        }
        if(this.props.id == 3) {
            title = photo4
        }
        if(this.props.id == 4) {
            title = photo5
        }
        if(this.props.id == 5) {
            title = photo6
        }
        return ( 
                <div class="photo-container">
                    <div class="photo">
                        <img src={title}/>
                    </div>
                </div>
            
            
            
         );
    }
}
 
export default Photos;