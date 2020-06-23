import React, { Component } from 'react';
import WorkoutDay from './WorkoutDay';

class Workout extends Component {
    state = {  }
    render() { 
        window.scroll(0,0)
        let toRender = []
        for(let i = 0; i < 6; i++) {
            toRender.push(<div style={{marginTop: "55px", marginBottom: "40px"}}><WorkoutDay workout={this.props.workout} day={i}/></div>)
        }
        return ( 
            <div class="workout-div">
                <div class="container">
                    {toRender}
                </div>
                
            </div> 
        );
    }
}
 
export default Workout;