import React, { Component } from 'react';
import '../index.css';

class PrincipleSeven extends Component {
    handlePrincipleClick = (e) => {
        this.props.goToPrincipleEightProp();
        this.props.handleClick(e, 'principle7');
    }

    render() {
        return (
            <main>
                <section className="principles-contents">
                    <div className="wrapper">
                        <h2>Principles Check-In:</h2>
                        <div className="principles-top-text">
                            <p><span className="principle-number">Principle #7:</span> Working software is the primary measure of progress.</p>
                            <p className="question">Is your team communicating the progress of the project by delivering working software and putting it in the hands of the users?</p>
                        </div>
                        <form action="submit">
                            <label htmlFor="principleSevenLog">Log your answer here:</label>
                            <textarea 
                            rows="10" 
                            cols="50"
                            id="principleSevenLog" 
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

export default PrincipleSeven;