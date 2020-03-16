import React, { Component } from 'react';
import '../index.css';

class PrincipleNine extends Component {
    handlePrincipleClick = (e) => {
        this.props.goToPrincipleTenProp();
        this.props.handleClick(e, 'principle9');
    }

    render() {
        return (
            <main>
                <section className="principles-contents">
                    <div className="wrapper">
                        <h2>Principles Check-In:</h2>
                        <div className="principles-top-text">
                            <p><span className="principle-number">Principle #9:</span> Continuous attention to technical excellence and good design enhances agility.</p>
                            <p className="question">Has your team maintained a focus on software that’s designed and implemented well?</p>
                        </div>
                        <form action="submit">
                            <label htmlFor="principleNineLog">Log your answer here:</label>
                            <textarea 
                            rows="10" 
                            cols="50"
                            id="principleNineLog" 
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

export default PrincipleNine;