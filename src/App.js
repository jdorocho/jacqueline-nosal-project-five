import React, { Component } from 'react';
import './index.css';

// Custom Imports
import Values from './components/Values';
import Principles from './components/Principles';
import Recorded from './components/Recorded';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstButtonClicked: false
    }
  }

  handleClick = () => {
    console.log("Button is clicked");
    return (
      <Values />
    );
  }

  render() {
    return (
      <main>
        <section className="contents">
          <div className="wrapper">
            <h1>Welcome</h1>
            <p className="welcome-text">The Agile Helper provides the opportunity to check-in with yourself on a regular basis, reflecting on the core principles behind your Agile practices</p>
            <button onClick={this.handleClick} tabIndex="1">
              <p>Continue to the Agile Values</p>
            </button>
          </div>
        </section>
        {/* <Values /> */}
        {/* <Principles />
        <Recorded /> */}
      </main>
    );
  }
}

export default App;
