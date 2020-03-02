import React, { Component } from 'react';
import './index.css';

// Custom Imports
import Welcome from './components/Welcome';
import PrincipleOne from './components/PrincipleOne';
// import PrincipleTwo from './components/PrincipleTwo';
// import PrincipleThree from './components/PrincipleThree';
// import PrincipleFour from './components/PrincipleFour';
// import PrincipleFive from './components/PrincipleFive';
// import PrincipleSix from './components/PrincipleSix';
// import Recorded from './components/Recorded';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showWelcome: true,
      showPrincipleOne: false
    }
  }

  showPrincipleOne = () => {
      this.setState({
          showPrincipleOne: true,
          showWelcome: false
      });
  }

  render() {
    return (
      <main>
        <section className="contents">
          <div className="wrapper">
            {this.state.showWelcome ? <Welcome /> : <PrincipleOne />}
            <button onClick={this.showPrincipleOne} tabIndex="1">
                <p>Continue</p>
            </button>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
