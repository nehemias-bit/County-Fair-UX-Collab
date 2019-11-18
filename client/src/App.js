import React from 'react';
import './App.css';
import Main from './components/Main';
import CountDownClock from './components/CountDownClock';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      deadline: "2019-12-25T20:00:00-04:00"
    }
  }
      
    render() {
      return (
        <div className="app">
          <Main />
          <CountDownClock deadline={this.state.deadline}/>
      </div>
    );
  }
}

export default App;
