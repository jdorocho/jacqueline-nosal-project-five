import React, { Component } from 'react';
import '../index.css';

class PrincipleEight extends Component {
    handlePrincipleClick = (e) => {
        this.props.goToPrincipleNineProp();
        this.props.handleClick(e, 'principle8');
    }

    render() {
        return (
            <main>
                <section className="principles-contents">
                    <div className="wrapper">
                        <h2>Principles Check-In:</h2>
                        <div className="principles-top-text">
                            <p><span className="principle-number">Principle #8:</span> Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.</p>
                            <p className="question">Is your team being the most productive they can be by working at a sustainable pace and avoiding heroics, shortcuts, and overtime?</p>
                        </div>
                        <form action="submit">
                            <label htmlFor="principleEightLog">Log your answer here:</label>
                            <textarea 
                            rows="10" 
                            cols="50"
                            id="principleEightLog" 
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

export default PrincipleEight;