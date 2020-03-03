import React, { Component } from 'react';
import '../index.css';

class PrincipleSix extends Component {
    sendDataToParent = () => {
        this.props.goToRecordedLogsProp();
    }

    render() {
        return (
            <main>
                <section className="principles-contents">
                    <div className="wrapper">
                        <h2>Principles Check-In:</h2>
                        <div className="principles-top-text">
                            <p><span className="principle-number">Principle #6:</span> Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.</p>
                            <p className="question">Does everyone on your team feel responsible for the project, and feel accountable for its success?</p>
                        </div>
                        <form action="submit">
                            <label htmlFor="reflection">Log your answer here:</label>
                            <input type="text"/>
                            <button onClick={this.sendDataToParent} type="submit">
                                <p>Submit and Continue</p>
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        );
    }
}

export default PrincipleSix;