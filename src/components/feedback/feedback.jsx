import React from 'react';
import style from '../feedback/style.module.css';

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleGood = () => {
        this.setState({good: +1,});
    };
    handleNeutral = () => {
    };
    handleBab = () => {
    };


    render() { 
        return (
            <div>
                <h1>Place leave feedback</h1>

                <button
                    className={style.feedback_btn}
                    type='button'
                    name='good'
                     onClick={this.handleGood}>
                    good
                </button>
                <button
                    className={style.feedback_btn}
                    type='button'
                    name='neutral'
                onClick={this.handleNeutral}>
                    neutral
                </button>
                <button
                    className={style.feedback_btn}
                    type='button'
                    name='bad'
                    onClick={this.handleBab}
                >
                    bad
                </button>
                <div>
                    <h2>
                        Statistics
                    </h2>
                    
                    <p className={style.feedback_value}>Good: {this.state.good} </p>
                    <p className={style.feedback_value}>Neutral:{this.state.neutral}</p>
                    <p className={style.feedback_value}>Bad: {this.state.bad}</p>

                </div>
            </div>
           
        );
    }
};
 
export default Feedback;