  
import React from "react";
// import classNames from "classnames";

export default class CountDownClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline)
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log('time', time)
    const seconds = Math.floor((time/1000) % 60);
    let minutes = Math.floor((time / 1000 / 60) % 60);
    if (minutes.toString().length === 1) {
      minutes = `0${Math.floor((time / 1000 / 60) % 60)}`
    }
    let hours = Math.floor(time / (1000 * 60 * 60) % 24);
    if (hours.toString().length === 1) {
      hours = `0${Math.floor(time / (1000 * 60 * 60) % 24)}`
    }
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    if (days.toString().length === 1) {
      days = `0${Math.floor(time / (1000 * 60 * 60 * 24))}`
    }
    console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days', days) 
    this.setState({ days, hours, minutes, seconds })
  }

  render() {
    return (
      <div id="count-down">
        <div id="days">
          <h2>{this.state.days}</h2>
          <p>Days</p>
        </div> 
        <div id="hours">
          <h2>{this.state.hours}</h2>
          <p>Hours</p>
        </div>
        <div id="minutes">
          <h2>{this.state.minutes}</h2>
          <p>Minutes</p>
        </div>  
        {/* <h2>{this.state.seconds}</h2> */}
      </div>
    );
  }
}