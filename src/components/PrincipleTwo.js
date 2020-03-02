import React, { Component } from 'react';
import '../index.css';

class PrincipleTwo extends Component {
    render() {
        return (
            <main>
                <section className="principles-contents">
                    <div className="wrapper">
                        <h2>Principles Check-In:</h2>
                        <div className="principles-top-text">
                            <p><span className="principle-number">Principle #2:</span> Welcome changing requirements, even late in development. Agile processes harness change for the customer’s competitive advantage.</p>
                            <p className="question">Did your team embrace change today by treating project changes as positive and healthy developments?</p>
                        </div>
                        <form action="submit">
                            <label htmlFor="reflection">Log your answer here:</label>
                            <input type="text"/>
                            {/* <button type="submit">
                                <p>Submit and Continue</p>
                            </button> */}
                        </form>
                    </div>
                </section>
            </main>
        );
    }
}

export default PrincipleTwo;