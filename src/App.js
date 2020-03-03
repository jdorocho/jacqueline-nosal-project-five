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
      userInput: 'test',
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
      console.log(response.val());

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

  recordingLogs = () => {
    this.state.logs.map((log) => {
      return (
        <li>
          <p>{log}</p>
        </li>
      );
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
    console.log(this.state.logs);
    return (
      <main>
        <section className="contents">
          <div className="wrapper">
            {this.state.showingWelcome ? <Welcome goToPrincipleOneProp={this.showPrincipleOne} /> : null}

            {this.state.showingPrincipleOne ? <PrincipleOne 
            goToPrincipleTwoProp={this.showPrincipleTwo} 
            handleChange={this.handleChange} 
            handleClick={this.handleClick} /> : null}

            {this.state.showingPrincipleTwo ? <PrincipleTwo 
            goToPrincipleThreeProp={this.showPrincipleThree} 
            handleChange={this.handlChange}
            handleClick={this.handleClick} /> : null}

            {this.state.showingPrincipleThree ? <PrincipleThree 
            goToPrincipleFourProp={this.showPrincipleFour} 
            handleChange={this.handlChange}
            handleClick={this.handleClick} /> : null}

            {this.state.showingPrincipleFour ? <PrincipleFour 
            goToPrincipleFiveProp={this.showPrincipleFive} 
            handleChange={this.handlChange}
            handleClick={this.handleClick} /> : null}

            {this.state.showingPrincipleFive ? <PrincipleFive 
            goToPrincipleSixProp={this.showPrincipleSix} 
            handleChange={this.handlChange}
            handleClick={this.handleClick} /> : null}

            {this.state.showingPrincipleSix ? <PrincipleSix 
            goToRecordedLogsProp={this.showRecordedLogs} 
            handleChange={this.handlChange}
            handleClick={this.handleClick} /> : null}

            {this.state.showingRecordedLogs ? <RecordedLogs startRecordingLogsProp={this.recordingLogs} /> : null}
          </div>
        </section>
      </main>
    );
  }
}

export default App;
