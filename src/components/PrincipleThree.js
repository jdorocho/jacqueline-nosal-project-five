import React, { Component } from 'react';
import '../index.css';

class PrincipleThree extends Component {
    sendDataToParent = () => {
        this.props.goToPrincipleFourProp();
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

export default PrincipleThree;