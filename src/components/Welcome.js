import React, { Component } from 'react';
import '../index.css';

class Welcome extends Component {
    render() {
        return(
            <div>
                <h1>Welcome</h1>
                <p className="welcome-text">The Agile Helper provides the opportunity to check-in with yourself on a regular basis, reflecting on the core principles behind your Agile practices</p>
            </div>
        );
    }
}

export default Welcome;