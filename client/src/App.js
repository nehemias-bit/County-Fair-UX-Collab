import React from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Gallery from './components/Gallery'
import EventsList from './components/EventsList';
import { Route, Link, withRouter } from 'react-router-dom';


// define our Event component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "2019-11-22T10:00:00-04:00"
    }
  }

  render() {
    // make sure to return some UI
    return (
      <div>
        <Header />
        <Main deadline={this.state.deadline} />
        <Route exact path="/home" render={() => (<EventsList /> )} />
                                                
        <Route exact path='/gallery' render={() => (
          <Gallery />
        )} />
        <Footer />

      </div >

    )
  }
}
export default App



