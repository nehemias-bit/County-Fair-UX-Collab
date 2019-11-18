import React from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import CountDownClock from './components/CountDownClock';

// define our Event component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "2019-12-25T20:00:00-04:00"
    }
  }

  render() {
    // make sure to return some UI
    return (
      <div>
        <Header />
        <Main />
        <CountDownClock deadline={this.state.deadline} />
        <Footer />
      </div >

    )
  }
}
export default App



