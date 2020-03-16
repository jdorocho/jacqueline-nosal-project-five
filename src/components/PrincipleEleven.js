import React, { Component } from 'react';
import '../index.css';

class PrincipleEleven extends Component {
    handlePrincipleClick = (e) => {
        this.props.goToPrincipleTwelveProp();
        this.props.handleClick(e, 'principle11');
    }

    render() {
        return (
            <main>
                <section className="principles-contents">
                    <div className="wrapper">
                        <h2>Principles Check-In:</h2>
                        <div className="principles-top-text">
                            <p><span className="principle-number">Principle #11:</span> The best architectures, requirements, and designs emerge from self-organizing teams.</p>
                            <p className="question">Is your team sharing responsibility for all aspects of the project, from conceiving the product to project management to design and implementation?</p>
                        </div>
                        <form action="submit">
                            <label htmlFor="principleElevenLog">Log your answer here:</label>
                            <textarea 
                            rows="10" 
                            cols="50"
                            id="principleElevenLog" 
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

export default PrincipleEleven;