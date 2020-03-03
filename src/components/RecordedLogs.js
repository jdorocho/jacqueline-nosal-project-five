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

    render() {
        console.log(this.props.startRecordingLogsProp);
        return (
            <main>
                <section className="principles-contents">
                    <div className="wrapper">
                        <h2>Principles Check-In: <br />Recorded Logs</h2>
                        <div className="recorded-entry">
                            <p className="recorded-date">{this.state.date}</p>
                            <div className="recorded-logs-container">
                                <ol>
                                    {this.props.startRecordingLogsProp.map((log, index) => {
                                        return (
                                            <li key={index}>
                                                <p>{log.userResponse}</p>
                                            </li>
                                        );
                                    })}
                                </ol>
                            </div>
                            <p className="citation">2020 Jacqui Nosal. All credit and reference to the Agile Manifesto, values, and principles goes to <cite>“Learning Agile: Understanding Scrum, XP, Lean, and Kanban” by Andrew Stellman & Jennifer Greene</cite></p>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default RecordedLogs;