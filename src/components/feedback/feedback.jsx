import React from 'react';
import style from '../feedback/style.module.css';

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };


    // якщо потрібно передати не оновуючить на попередньом значенні то це обєкт  --  handleGood () {this.setState({1234})}
    // Якщо потрібно передати виходячи з попереднього значенні то цк функція  ---  handleGood = () => {};

    handleGood = () => {
        this.setState(prevState => ({
              good: prevState.good +1
        })
        );
    };
    handleNeutral = () => {
        this.setState((prevState => ({
            neutral: prevState.neutral + 1
        })))
    };
    handleBab = () => {
        this.setState((prevState => ({
            bad: prevState.bad +1
        })))
    };
    countTotalFeedback = () => {
        
    };
    countPositiveFeedbackPercentage = () => {

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
                    <p className={style.feedback_value}>Neutral: {this.state.neutral}</p>
                    <p className={style.feedback_value}>Bad: {this.state.bad}</p>
                    <p className={style.feedback_value}>Total: </p>
                    <p className={style.feedback_value}>Positive feedback: %</p>

                </div>
            </div>
           
        );
    }
};
 
export default Feedback;