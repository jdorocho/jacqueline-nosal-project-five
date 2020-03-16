import React, { Component } from 'react';
import '../index.css';

class PrincipleTen extends Component {
    handlePrincipleClick = (e) => {
        this.props.goToPrincipleElevenProp();
        this.props.handleClick(e, 'principle10');
    }

    render() {
        return (
            <main>
                <section className="principles-contents">
                    <div className="wrapper">
                        <h2>Principles Check-In:</h2>
                        <div className="principles-top-text">
                            <p><span className="principle-number">Principle #10:</span> Simplicity- the art of maximizing the amount of work not done- is essential.</p>
                            <p className="question">Is your team keeping their solutions as simple as possible by avoiding building unnecessary features or overly complex software?</p>
                        </div>
                        <form action="submit">
                            <label htmlFor="principleTenLog">Log your answer here:</label>
                            <textarea 
                            rows="10" 
                            cols="50"
                            id="principleTenLog" 
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

export default PrincipleTen;