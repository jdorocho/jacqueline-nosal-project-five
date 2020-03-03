import React, { Component } from 'react';
import '../index.css';

class RecordedLogs extends Component {
    constructor() {
        super();

        const today = new Date();
        const dateDisplay = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();

        this.state = {
            date: dateDisplay
        };
    }

    sendDataToParent = () => {
        this.props.startRecordingLogsProp();
    }

    render() {
        return (
            <main>
                <section className="principles-contents">
                    <div className="wrapper">
                        <h2>Principles Check-In: <br />Recorded Logs</h2>
                        <div className="recorded-entry">
                            <p className="recorded-date">{this.state.date}</p>
                            <div className="recorded-logs-container">
                                <ul>
                                    {this.sendDataToParent}
                                </ul>
                            </div>
                            <p className="citation">2020 Jacqui Nosal. All credit and reference to the <cite>Agile Manifesto, values, and principles goes to “Learning Agile: Understanding Scrum, XP, Lean, and Kanban” by Andrew Stellman & Jennifer Greene</cite></p>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default RecordedLogs;