import React, { Component } from 'react';
import '../index.css';

class Welcome extends Component {
    sendDataToParent = () => {
        this.props.goToPrincipleOneProp();
    }

    render() {
        return(
            <div>
                <h1>Welcome</h1>
                <p className="welcome-text">The Agile Helper provides the opportunity to check-in with yourself on a regular basis, reflecting on the core principles behind your Agile practices</p>
                <button onClick={this.sendDataToParent} tabIndex="1">
                    <p>Continue</p>
                </button>
            </div>
        );
    }
}

export default Welcome;