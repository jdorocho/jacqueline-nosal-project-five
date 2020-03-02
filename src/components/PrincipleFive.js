import React, { Component } from 'react';
import '../index.css';

class PrincipleFive extends Component {
    sendDataToParent = () => {
        this.props.goToPrincipleSixProp();
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

export default PrincipleFive;