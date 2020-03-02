import React, { Component } from 'react';
import './index.css';

// Custom Imports
import Welcome from './components/Welcome';
import PrincipleOne from './components/PrincipleOne';
import PrincipleTwo from './components/PrincipleTwo';
import PrincipleThree from './components/PrincipleThree';
import PrincipleFour from './components/PrincipleFour';
import PrincipleFive from './components/PrincipleFive';
import PrincipleSix from './components/PrincipleSix';
import Recorded from './components/Recorded';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showingWelcome: true,
      showingPrincipleOne: false,
      showingPrincipleTwo: false,
      showingPrincipleThree: false,
      showingPrincipleFour: false,
      showingPrincipleFive: false,
      showingPrincipleSix: false
    }
  }

  showPrincipleOne = () => {
      this.setState({
          showingWelcome: false, 
          showingPrincipleOne: true,
          showingPrincipleTwo: false,
          showingPrincipleThree: false,
          showingPrincipleFour: false,
          showingPrincipleFive: false,
          showingPrincipleSix: false
      });
  }

  showPrincipleTwo = () => {
      this.setState({
          showingWelcome: false, 
          showingPrincipleOne: false,
          showingPrincipleTwo: true,
          showingPrincipleThree: false,
          showingPrincipleFour: false,
          showingPrincipleFive: false,
          showingPrincipleSix: false
      });
  }

  showPrincipleThree = () => {
    this.setState({
        showingWelcome: false, 
        showingPrincipleOne: false,
        showingPrincipleTwo: false,
        showingPrincipleThree: true,
        showingPrincipleFour: false,
        showingPrincipleFive: false,
        showingPrincipleSix: false
    });
  }

  render() {
    return (
      <main>
        <section className="contents">
          <div className="wrapper">
            {this.state.showingWelcome ? <Welcome goToPrincipleOneProp={this.showPrincipleOne} /> : null}
            {this.state.showingPrincipleOne ? <PrincipleOne goToPrincipleTwoProp={this.showPrincipleTwo} /> : null}
            {this.state.showingPrincipleTwo ? <PrincipleTwo goToPrincipleThreeProp={this.showPrincipleThree} /> : null}
            {this.state.showingPrincipleThree ? <PrincipleThree goToPrincipleFourProp={this.showPrincipleFour} /> : null}
          </div>
        </section>
      </main>
    );
  }
}

export default App;
