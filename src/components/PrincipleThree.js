import React, { Component } from 'react';
import '../index.css';

class PrincipleThree extends Component {
    handlePrincipleClick = (e) => {
        this.props.goToPrincipleFourProp();
        this.props.handleClick(e, 'principle3');
    }

    render() {
        return (
            <main>
                <section className="principles-contents">
                    <div className="wrapper">
                        <h2>Principles Check-In:</h2>
                        <div className="principles-top-text">
                            <p><span className="principle-number">Principle #3:</span> Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.</p>
                            <p className="question">Did your team leverage timeboxed iterations to deliver working software frequently, and constantly adjust so that the project delivers the most value to the customer?</p>
                        </div>
                        <form action="submit">
                            <label htmlFor="principleThreeLog">Log your answer here:</label>
                            <textarea 
                            rows="10" 
                            cols="50"
                            id="principleThreeLog" 
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

export default PrincipleThree;