import React, { Component } from 'react';
import '../index.css';

class PrincipleOne extends Component {
    handlePrincipleClick = (e) => {
            this.props.goToPrincipleTwoProp();
            this.props.handleClick(e, 'principle1');
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
                            <label htmlFor="principleOneLog">Log your answer here:</label>
                            <textarea 
                            rows="10" 
                            cols="50"
                            id="principleOneLog" 
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

export default PrincipleOne;

