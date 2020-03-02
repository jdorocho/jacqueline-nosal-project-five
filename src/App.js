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
      showingWelcome: true,
      showingPrincipleOne: false
    }
  }

  showPrincipleOne = () => {
      this.setState({
          showingWelcome: false, 
          showingPrincipleOne: true
      });
  }

  render() {
    return (
      <main>
        <section className="contents">
          <div className="wrapper">
            {this.state.showingWelcome ? <Welcome goToPrincipleOneProp={this.showPrincipleOne} /> : <PrincipleOne />}
          </div>
        </section>
      </main>
    );
  }
}

export default App;
