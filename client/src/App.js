import React from "react";
import Header from './components/Header'
import Footer from './components/Footer'

// define our Event component
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    // make sure to return some UI
    return (
      <div>
        <Header />
        <h2>Basketball Practice</h2>
        <p>7:45 - 9 pm</p>
        <Footer />
      </div >
    );
  }
}

export default App;
