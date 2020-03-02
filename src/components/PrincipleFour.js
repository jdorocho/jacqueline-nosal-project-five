import React, { Component } from 'react';
import '../index.css';

class PrincipleFour extends Component {
    sendDataToParent = () => {
        this.props.goToPrincipleFiveProp();
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

export default PrincipleFour;