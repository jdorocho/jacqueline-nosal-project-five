import React, { Component } from 'react';
import './index.css';

// Custom Imports
import firebase from './firebase';
import Welcome from './components/Welcome';
import PrincipleOne from './components/PrincipleOne';
import PrincipleTwo from './components/PrincipleTwo';
import PrincipleThree from './components/PrincipleThree';
import PrincipleFour from './components/PrincipleFour';
import PrincipleFive from './components/PrincipleFive';
import PrincipleSix from './components/PrincipleSix';
import RecordedLogs from './components/RecordedLogs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      logs: [],
      showingWelcome: true,
      showingPrincipleOne: false,
      showingPrincipleTwo: false,
      showingPrincipleThree: false,
      showingPrincipleFour: false,
      showingPrincipleFive: false,
      showingPrincipleSix: false, 
      showingRecordedLogs: false
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const newState = [];

      const data = response.val();

      for (let key in data) {
        newState.push(data[key]);
      }

      this.setState({
        books: newState
      });
    });
  }

  recordingLogs = () => {
    this.state.logs.map((log) => {
      return <li>{log}</li>
    })
  }

  showPrincipleOne = () => {
      this.setState({
          showingWelcome: false, 
          showingPrincipleOne: true,
          showingPrincipleTwo: false,
          showingPrincipleThree: false,
          showingPrincipleFour: false,
          showingPrincipleFive: false,
          showingPrincipleSix: false, 
          showingRecordedLogs: false
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
          showingPrincipleSix: false, 
          showingRecordedLogs: false
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
        showingPrincipleSix: false, 
        showingRecordedLogs: false
    });
  }

  showPrincipleFour = () => {
    this.setState({
        showingWelcome: false, 
        showingPrincipleOne: false,
        showingPrincipleTwo: false,
        showingPrincipleThree: false,
        showingPrincipleFour: true,
        showingPrincipleFive: false,
        showingPrincipleSix: false, 
        showingRecordedLogs: false
    });
  }

  showPrincipleFive = () => {
    this.setState({
        showingWelcome: false, 
        showingPrincipleOne: false,
        showingPrincipleTwo: false,
        showingPrincipleThree: false,
        showingPrincipleFour: false,
        showingPrincipleFive: true,
        showingPrincipleSix: false, 
        showingRecordedLogs: false
    });
  }

  showPrincipleSix = () => {
    this.setState({
        showingWelcome: false, 
        showingPrincipleOne: false,
        showingPrincipleTwo: false,
        showingPrincipleThree: false,
        showingPrincipleFour: false,
        showingPrincipleFive: false,
        showingPrincipleSix: true, 
        showingRecordedLogs: false
    });
  }

  showRecordedLogs = () => {
    this.setState({
        showingWelcome: false, 
        showingPrincipleOne: false,
        showingPrincipleTwo: false,
        showingPrincipleThree: false,
        showingPrincipleFour: false,
        showingPrincipleFive: false,
        showingPrincipleSix: false, 
        showingRecordedLogs: true
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
            {this.state.showingPrincipleFour ? <PrincipleFour goToPrincipleFiveProp={this.showPrincipleFive} /> : null}
            {this.state.showingPrincipleFive ? <PrincipleFive goToPrincipleSixProp={this.showPrincipleSix} /> : null}
            {this.state.showingPrincipleSix ? <PrincipleSix goToRecordedLogsProp={this.showRecordedLogs} /> : null}
            {this.state.showingRecordedLogs ? <RecordedLogs startRecordingLogsProp={this.recordingLogs} /> : null}
          </div>
        </section>
      </main>
    );
  }
}

export default App;
