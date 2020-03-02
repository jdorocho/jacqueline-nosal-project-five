import React, { Component } from 'react';
import '../index.css';

class Recorded extends Component {
    render() {
        return (
            <main>
                <section className="principles-contents">
                    <div className="wrapper">
                        <h2>Principles Check-In: <br />Recorded Logs</h2>
                        <p className="recorded-date">DATE</p>
                        <div className="recorded-logs-container">Container for recorded logs</div>
                        <p className="citation">2020 Jacqui Nosal. All credit and reference to the <cite>Agile Manifesto, values, and principles goes to “Learning Agile: Understanding Scrum, XP, Lean, and Kanban” by Andrew Stellman & Jennifer Greene</cite></p>
                    </div>
                </section>
            </main>
        );
    }
}

export default Recorded;