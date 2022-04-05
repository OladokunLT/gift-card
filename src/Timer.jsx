import React, { Component } from "react"

class Timer extends Component {
    constructor() {
        super();

        this.state = {
            date: new Date(),
        };
    }

    // method that is fired when the dom is rendered
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
    }
    
    componentWillUnmount() {
        clearInterval(this.timmerID)
    }

    tick = () => {
        this.setState({date: new Date()})
    }
   
    render(){
        return(
            <h5>Welcome! The time is {this.state.date.toLocaleTimeString()} </h5>
        );
    }
}

export default Timer;