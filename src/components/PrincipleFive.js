import React, { Component } from 'react';
import '../index.css';

class PrincipleFive extends Component {
    handlePrincipleClick = (e) => {
        this.props.goToPrincipleSixProp();
        this.props.handleClick(e, 'principleFive');
    }

    render() {
        return (
            <main>
                <section className="principles-contents">
                    <div className="wrapper">
                        <h2>Principles Check-In:</h2>
                        <div className="principles-top-text">
                            <p><span className="principle-number">Principle #5:</span> Businesspeople and developers must work together daily throughout the project.</p>
                            <p className="question">Are the Developers on your team working with business users every day so that they can deliver the most value?</p>
                        </div>
                        <form action="submit">
                            <label htmlFor="principleFiveLog">Log your answer here:</label>
                            <textarea 
                            rows="10" 
                            cols="50"
                            id="principleFiveLog" 
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

export default PrincipleFive;