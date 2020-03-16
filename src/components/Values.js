import React, { Component } from 'react';
import '../index.css';

class Values extends Component {
    sendDataToParent = () => {
        this.props.goToPrincipleOneProp();
    }

    render() {
        return (
            <main>
                <section className="contents">
                    <div className="wrapper">
                        <h2>Four Core Values of the Agile Manifesto:</h2>
                        <ol>
                            <li>
                                <p>Individuals and interactions over processes and tools</p>
                            </li>
                            <li>
                                <p>Working software over comprehensive documentation</p>
                            </li>
                            <li>
                                <p>Customer collaboration over contract negotiation</p>
                            </li>
                            <li>
                                <p>Responding to change over following a plan</p>
                            </li>
                        </ol>
                        <p>While there is value in the items on the right, we value the items on the left more.</p>
                        <button onClick={this.sendDataToParent} tabIndex="1">
                            <p>Continue to the Principles Check-in</p>
                        </button>
                    </div>
                </section>
            </main>
        );
    }
}

export default Values;