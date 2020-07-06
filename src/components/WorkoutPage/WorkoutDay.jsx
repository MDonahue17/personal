import React, { Component } from 'react';

class WorkoutDay extends Component {
    state = {
        day: "Saturday",
        dayWorkout: null,
        additional: null
    }


    componentDidMount() {
        let day = null;
        if(this.props.day == undefined) {
            let d = new Date();
            day = d.getDay();
        } else {
            day = this.props.day
        }
        let dayOfWeek = ""
        switch (day) {
            case 0:
                dayOfWeek = "Sunday"
                break;
            case 1:
                dayOfWeek = "Monday"
                break;
            case 2:
                dayOfWeek = "Tuesday"
                break;
            case 3:
                dayOfWeek = "Wednesday"
                break;
            case 4:
                dayOfWeek = "Thursday"
                break;
            case 5:
                dayOfWeek = "Friday"
                break;
            default:
                dayOfWeek = "Saturday"
                break;
        }
        if (day === 0 || day === 4) {
            if (this.props.workout.SunThur.cardio) {
                let random = Math.floor(Math.random() * 10) % 3
                this.setState({ dayWorkout: this.props.workout.SunThur, additional: this.props.workout.cardio[random], day: dayOfWeek, name: "Cardio" })
            } else {
                this.setState({ dayWorkout: this.props.workout.SunThur, additional: this.props.workout.abs, day: dayOfWeek, name: "Abs" })
            }
        } else if (day === 1 || day === 5) {
            if (this.props.workout.MonFri.cardio) {
                let random = Math.floor(Math.random() * 10) % 3
                this.setState({ dayWorkout: this.props.workout.MonFri, additional: this.props.workout.cardio[random], day: dayOfWeek, name: "Cardio" })
            } else {
                this.setState({ dayWorkout: this.props.workout.MonFri, additional: this.props.workout.abs, day: dayOfWeek, name: "Abs" })
            }
        } else if (day === 2 || day === 6) {
            if (this.props.workout.TueSat.cardio) {
                let random = Math.floor(Math.random() * 10) % 3
                this.setState({ dayWorkout: this.props.workout.TueSat, additional: this.props.workout.cardio[random], day: dayOfWeek, name: "Cardio" })
            } else {
                this.setState({ dayWorkout: this.props.workout.TueSat, additional: this.props.workout.abs, day: dayOfWeek, name: "Abs" })
            }
        } else {
            this.setState({ dayWorkout: null, additional: null, day: dayOfWeek })
        }
    }



    render() {
        if(this.state.dayWorkout != null) {
            let power = []
            for(let i = 0; i < this.state.dayWorkout.powerLifts.length; i++) {
                power.push(<h5>{this.state.dayWorkout.powerLifts[i][0]} - {this.state.dayWorkout.powerLifts[i][1]}</h5>)
            }
            let circuit = []
            for(let i = 0; i < this.state.dayWorkout.circuit.length; i++) {
                circuit.push(<h5>{this.state.dayWorkout.circuit[i][0]} - {this.state.dayWorkout.circuit[i][1]}</h5>)
            }
            return (
                <div class="container">
                    <div class="card" style={{boxShadow: "1px 2px 5px grey" }}>
                        <div class="container">
                            <h1>{this.state.day}</h1>
                            <hr />
                        </div>
                        <div class="container">
                            <h2>Olympic Lifts</h2>
                            {power}
                            <hr />
                        </div>
                        <div class="container">
                            <h2>Circuit</h2>
                            {circuit}
                            <hr />
                        </div>
                        <div class="container">
                            <h2>{this.state.name}</h2>
                            <h5>{this.state.additional[0]}</h5>
                            <hr />
                        </div>
                    </div>
                    
                </div>
            );
        } else {
            return <div></div>
        }
        
    }
}

export default WorkoutDay;