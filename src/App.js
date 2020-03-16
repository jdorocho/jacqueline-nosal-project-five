import React, { Component } from 'react';
import './index.css';

// Custom Imports
import firebase from './firebase';
import Welcome from './components/Welcome';
import Values from './components/Values';
import PrincipleOne from './components/PrincipleOne';
import PrincipleTwo from './components/PrincipleTwo';
import PrincipleThree from './components/PrincipleThree';
import PrincipleFour from './components/PrincipleFour';
import PrincipleFive from './components/PrincipleFive';
import PrincipleSix from './components/PrincipleSix';
import PrincipleSeven from './components/PrincipleSeven';
import PrincipleEight from './components/PrincipleEight';
import PrincipleNine from './components/PrincipleNine';
import PrincipleTen from './components/PrincipleTen';
import PrincipleEleven from './components/PrincipleEleven';
import PrincipleTwelve from './components/PrincipleTwelve';
import RecordedLogs from './components/RecordedLogs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      logs: [],
      userInput: "",
      showingWelcome: true,
      showingValues: false,
      showingPrincipleOne: false,
      showingPrincipleTwo: false,
      showingPrincipleThree: false,
      showingPrincipleFour: false,
      showingPrincipleFive: false,
      showingPrincipleSix: false, 
      showingPrincipleSeven: false,
      showingPrincipleEight: false,
      showingPrincipleNine: false,
      showingPrincipleTen: false, 
      showingPrincipleEleven: false,
      showingPrincipleTwelve: false,
      showingRecordedLogs: false
    }
  }

  componentDidMount() {
    // Firebase
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {

      const newState = [];
      const data = response.val();

      for (let key in data) {
        newState.push(data[key]);
      }

      this.setState({
        logs: newState
      });
    });
  }

  handleChange = (e) => {
    this.setState({userInput: e.target.value})
  }

  handleClick = (e, principle) => {
    e.preventDefault();
    const dbRefUserResponses = firebase.database().ref(`/${principle}`);

    dbRefUserResponses.update({
      principle: principle,
      userResponse: this.state.userInput
    })

    this.setState({userInput: ""})
  }

  // List of functions that determine which page is being shown
  showValues = () => {
    this.setState({
      showingWelcome: false, 
      showingValues: true,
      showingPrincipleOne: false,
      showingPrincipleTwo: false,
      showingPrincipleThree: false,
      showingPrincipleFour: false,
      showingPrincipleFive: false,
      showingPrincipleSix: false, 
      showingPrincipleSeven: false,
      showingPrincipleEight: false,
      showingPrincipleNine: false,
      showingPrincipleTen: false, 
      showingPrincipleEleven: false,
      showingPrincipleTwelve: false,
      showingRecordedLogs: false
    });
  }

  showPrincipleOne = () => {
      this.setState({
          showingWelcome: false, 
          showingValues: false,
          showingPrincipleOne: true,
          showingPrincipleTwo: false,
          showingPrincipleThree: false,
          showingPrincipleFour: false,
          showingPrincipleFive: false,
          showingPrincipleSix: false, 
          showingPrincipleSeven: false,
          showingPrincipleEight: false,
          showingPrincipleNine: false,
          showingPrincipleTen: false, 
          showingPrincipleEleven: false,
          showingPrincipleTwelve: false,
          showingRecordedLogs: false
      });
  }

  showPrincipleTwo = () => {
      this.setState({
          showingWelcome: false, 
          showingValues: false,
          showingPrincipleOne: false,
          showingPrincipleTwo: true,
          showingPrincipleThree: false,
          showingPrincipleFour: false,
          showingPrincipleFive: false,
          showingPrincipleSix: false, 
          showingPrincipleSeven: false,
          showingPrincipleEight: false,
          showingPrincipleNine: false,
          showingPrincipleTen: false, 
          showingPrincipleEleven: false,
          showingPrincipleTwelve: false,
          showingRecordedLogs: false
      });
  }

  showPrincipleThree = () => {
    this.setState({
        showingWelcome: false, 
        showingValues: false,
        showingPrincipleOne: false,
        showingPrincipleTwo: false,
        showingPrincipleThree: true,
        showingPrincipleFour: false,
        showingPrincipleFive: false,
        showingPrincipleSix: false, 
        showingPrincipleSeven: false,
        showingPrincipleEight: false,
        showingPrincipleNine: false,
        showingPrincipleTen: false, 
        showingPrincipleEleven: false,
        showingPrincipleTwelve: false,
        showingRecordedLogs: false
    });
  }

  showPrincipleFour = () => {
    this.setState({
        showingWelcome: false, 
        showingValues: false,
        showingPrincipleOne: false,
        showingPrincipleTwo: false,
        showingPrincipleThree: false,
        showingPrincipleFour: true,
        showingPrincipleFive: false,
        showingPrincipleSix: false, 
        showingPrincipleSeven: false,
        showingPrincipleEight: false,
        showingPrincipleNine: false,
        showingPrincipleTen: false, 
        showingPrincipleEleven: false,
        showingPrincipleTwelve: false,
        showingRecordedLogs: false
    });
  }

  showPrincipleFive = () => {
    this.setState({
        showingWelcome: false, 
        showingValues: false,
        showingPrincipleOne: false,
        showingPrincipleTwo: false,
        showingPrincipleThree: false,
        showingPrincipleFour: false,
        showingPrincipleFive: true,
        showingPrincipleSix: false, 
        showingPrincipleSeven: false,
        showingPrincipleEight: false,
        showingPrincipleNine: false,
        showingPrincipleTen: false, 
        showingPrincipleEleven: false,
        showingPrincipleTwelve: false,
        showingRecordedLogs: false
    });
  }

  showPrincipleSix = () => {
    this.setState({
        showingWelcome: false, 
        showingValues: false,
        showingPrincipleOne: false,
        showingPrincipleTwo: false,
        showingPrincipleThree: false,
        showingPrincipleFour: false,
        showingPrincipleFive: false,
        showingPrincipleSix: true, 
        showingPrincipleSeven: false,
        showingPrincipleEight: false,
        showingPrincipleNine: false,
        showingPrincipleTen: false, 
        showingPrincipleEleven: false,
        showingPrincipleTwelve: false,
        showingRecordedLogs: false
    });
  }

  showPrincipleSeven = () => {
    this.setState({
        showingWelcome: false, 
        showingValues: false,
        showingPrincipleOne: false,
        showingPrincipleTwo: false,
        showingPrincipleThree: false,
        showingPrincipleFour: false,
        showingPrincipleFive: false,
        showingPrincipleSix: false,
        showingPrincipleSeven: true,
        showingPrincipleEight: false,
        showingPrincipleNine: false,
        showingPrincipleTen: false, 
        showingPrincipleEleven: false,
        showingPrincipleTwelve: false,
        showingRecordedLogs: false
    });
  }

  showPrincipleEight = () => {
    this.setState({
        showingWelcome: false, 
        showingValues: false,
        showingPrincipleOne: false,
        showingPrincipleTwo: false,
        showingPrincipleThree: false,
        showingPrincipleFour: false,
        showingPrincipleFive: false,
        showingPrincipleSix: false,
        showingPrincipleSeven: false,
        showingPrincipleEight: true,
        showingPrincipleNine: false,
        showingPrincipleTen: false, 
        showingPrincipleEleven: false,
        showingPrincipleTwelve: false,
        showingRecordedLogs: false
    });
  }

  showPrincipleNine = () => {
    this.setState({
        showingWelcome: false, 
        showingValues: false,
        showingPrincipleOne: false,
        showingPrincipleTwo: false,
        showingPrincipleThree: false,
        showingPrincipleFour: false,
        showingPrincipleFive: false,
        showingPrincipleSix: false,
        showingPrincipleSeven: false,
        showingPrincipleEight: false,
        showingPrincipleNine: true,
        showingPrincipleTen: false, 
        showingPrincipleEleven: false,
        showingPrincipleTwelve: false,
        showingRecordedLogs: false
    });
  }

  showPrincipleTen = () => {
    this.setState({
        showingWelcome: false, 
        showingValues: false,
        showingPrincipleOne: false,
        showingPrincipleTwo: false,
        showingPrincipleThree: false,
        showingPrincipleFour: false,
        showingPrincipleFive: false,
        showingPrincipleSix: false,
        showingPrincipleSeven: false,
        showingPrincipleEight: false,
        showingPrincipleNine: false,
        showingPrincipleTen: true, 
        showingPrincipleEleven: false,
        showingPrincipleTwelve: false,
        showingRecordedLogs: false
    });
  }

  showPrincipleEleven = () => {
    this.setState({
        showingWelcome: false, 
        showingValues: false,
        showingPrincipleOne: false,
        showingPrincipleTwo: false,
        showingPrincipleThree: false,
        showingPrincipleFour: false,
        showingPrincipleFive: false,
        showingPrincipleSix: false,
        showingPrincipleSeven: false,
        showingPrincipleEight: false,
        showingPrincipleNine: false,
        showingPrincipleTen: false, 
        showingPrincipleEleven: true,
        showingPrincipleTwelve: false,
        showingRecordedLogs: false
    });
  }

  showPrincipleTwelve = () => {
    this.setState({
        showingWelcome: false, 
        showingValues: false,
        showingPrincipleOne: false,
        showingPrincipleTwo: false,
        showingPrincipleThree: false,
        showingPrincipleFour: false,
        showingPrincipleFive: false,
        showingPrincipleSix: false,
        showingPrincipleSeven: false,
        showingPrincipleEight: false,
        showingPrincipleNine: false,
        showingPrincipleTen: false, 
        showingPrincipleEleven: false,
        showingPrincipleTwelve: true,
        showingRecordedLogs: false
    });
  }

  showRecordedLogs = () => {
    this.setState({
        showingWelcome: false, 
        showingValues: false,
        showingPrincipleOne: false,
        showingPrincipleTwo: false,
        showingPrincipleThree: false,
        showingPrincipleFour: false,
        showingPrincipleFive: false,
        showingPrincipleSix: false, 
        showingPrincipleSeven: false,
        showingPrincipleEight: false,
        showingPrincipleNine: false,
        showingPrincipleTen: false, 
        showingPrincipleEleven: false,
        showingPrincipleTwelve: false,
        showingRecordedLogs: true
    });
  }

  render() {
    return (
      <main>
        <section className="contents">
          <div className="wrapper">
            {this.state.showingWelcome ? <Welcome goToValuesProp={this.showValues} /> : null}

            {this.state.showingValues ? <Values goToPrincipleOneProp={this.showPrincipleOne} /> : null}

            {this.state.showingPrincipleOne ? <PrincipleOne 
            goToPrincipleTwoProp={this.showPrincipleTwo} 
            handleChange={this.handleChange} 
            handleClick={this.handleClick} /> : null}

            {this.state.showingPrincipleTwo ? <PrincipleTwo 
            goToPrincipleThreeProp={this.showPrincipleThree} 
            handleChange={this.handleChange}
            handleClick={this.handleClick} /> : null}

            {this.state.showingPrincipleThree ? <PrincipleThree 
            goToPrincipleFourProp={this.showPrincipleFour} 
            handleChange={this.handleChange}
            handleClick={this.handleClick} /> : null}

            {this.state.showingPrincipleFour ? <PrincipleFour 
            goToPrincipleFiveProp={this.showPrincipleFive} 
            handleChange={this.handleChange}
            handleClick={this.handleClick} /> : null}

            {this.state.showingPrincipleFive ? <PrincipleFive 
            goToPrincipleSixProp={this.showPrincipleSix} 
            handleChange={this.handleChange}
            handleClick={this.handleClick} /> : null}

            {this.state.showingPrincipleSix ? <PrincipleSix 
            goToPrincipleSevenProp={this.showPrincipleSeven} 
            handleChange={this.handleChange}
            handleClick={this.handleClick} /> : null}

            {this.state.showingPrincipleSeven ? <PrincipleSeven 
            goToPrincipleEightProp={this.showPrincipleEight} 
            handleChange={this.handleChange}
            handleClick={this.handleClick} /> : null}

            {this.state.showingPrincipleEight ? <PrincipleEight 
            goToPrincipleNineProp={this.showPrincipleNine} 
            handleChange={this.handleChange}
            handleClick={this.handleClick} /> : null}

            {this.state.showingPrincipleNine ? <PrincipleNine 
            goToPrincipleTenProp={this.showPrincipleTen} 
            handleChange={this.handleChange}
            handleClick={this.handleClick} /> : null}

            {this.state.showingPrincipleTen ? <PrincipleTen 
            goToPrincipleElevenProp={this.showPrincipleEleven} 
            handleChange={this.handleChange}
            handleClick={this.handleClick} /> : null}

            {this.state.showingPrincipleEleven ? <PrincipleEleven 
            goToPrincipleTwelveProp={this.showPrincipleTwelve} 
            handleChange={this.handleChange}
            handleClick={this.handleClick} /> : null}

            {this.state.showingPrincipleTwelve ? <PrincipleTwelve 
            goToRecordedLogsProp={this.showRecordedLogs} 
            handleChange={this.handleChange}
            handleClick={this.handleClick} /> : null}

            {this.state.showingRecordedLogs ? <RecordedLogs startRecordingLogsProp={this.state.logs} /> : null}
          </div>
        </section>
      </main>
    );
  }
}

export default App;
