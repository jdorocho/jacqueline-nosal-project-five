import React, { Component } from 'react';
import '../index.css';

class PrincipleOne extends Component {
    sendDataToParent = () => {
        this.props.goToPrincipleTwoProp();
    }

    render() {
        return (
            <main>
                <section className="principles-contents">
                    <div className="wrapper">
                        <h2>Principles Check-In:</h2>
                        <div className="principles-top-text">
                            <p><span className="principle-number">Principle #1:</span> Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.</p>
                            <p className="question">How is your team doing with regards to continuously delivering software to get feedback early in the project, and keeping that feedback up to date?</p>
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

export default PrincipleOne;

