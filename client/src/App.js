import React from 'react';
import './App.css';
import EventsList from './components/EventsList';

class App extends React.Component {
  constructor() {
    super();  
  }
  
  render() {
    return (
      <div className="App">
        <EventsList />
      </div>
    );
  }
  
  
}

export default App;
