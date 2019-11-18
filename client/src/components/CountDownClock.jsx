  
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
    const minutes = Math.floor((time/1000 / 60) % 60);
    const hours = Math.floor(time/(1000 * 60 * 60) % 24);
    const days = Math.floor(time/(1000 * 60 * 60 * 24));
    console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days', days) 
    this.setState({ days, hours, minutes, seconds })
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}