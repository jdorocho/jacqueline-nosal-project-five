import React, { Component } from 'react';
import '../index.css';

class PrincipleFour extends Component {
    handlePrincipleClick = (e) => {
        this.props.goToPrincipleFiveProp();
        this.props.handleClick(e, 'principle4');
    }

    render() {
        return (
            <main>
                <section className="principles-contents">
                    <div className="wrapper">
                        <h2>Principles Check-In:</h2>
                        <div className="principles-top-text">
                            <p><span className="principle-number">Principle #4:</span> The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.</p>
                            <p className="question">Did your team focus on face-to-face conversation and rely on the minimum amount of documentation necessary for the project?</p>
                        </div>
                        <form action="submit">
                            <label htmlFor="principleFourLog">Log your answer here:</label>
                            <textarea 
                            rows="10" 
                            cols="50"
                            id="principleFourLog"
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

export default PrincipleFour;