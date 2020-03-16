import React, { Component } from 'react';
import '../index.css';

class PrincipleTwelve extends Component {
    handlePrincipleClick = (e) => {
        this.props.goToRecordedLogsProp();
        this.props.handleClick(e, 'principle12');
    }

    render() {
        return (
            <main>
                <section className="principles-contents">
                    <div className="wrapper">
                        <h2>Principles Check-In:</h2>
                        <div className="principles-top-text">
                            <p><span className="principle-number">Principle #12:</span> At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behaviour accordingly.</p>
                            <p className="question">Is your team constantly getting better at building software by taking the time to look back and talk about the lessons they learned after each iteration, and also at the end of the project?</p>
                        </div>
                        <form action="submit">
                            <label htmlFor="principleTwelveLog">Log your answer here:</label>
                            <textarea 
                            rows="10" 
                            cols="50"
                            id="principleTwelveLog" 
                            onChange={this.props.handleChange}>
                            </textarea>
                            <button 
                            onClick={this.handlePrincipleClick}
                            type="submit">
                                <p>Submit and Continue</p>
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        );
    }
}

export default PrincipleTwelve;