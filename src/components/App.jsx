import React, {Component} from 'react';


import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Staticsics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
       
    };
     
    // якщо потрібно передати не оновуючить на попередньом значенні то це обєкт  --  handleGood () {this.setState({1234})}
    // Якщо потрібно передати виходячи з попереднього значенні то цк функція  ---  handleGood = () => {};


    handleGood = () => {
        this.setState(prevState => ({
              good: prevState.good +1,
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
    countTotalFeedback () {
        const { good, neutral, bad } = this.state;
        
        return good + neutral + bad;
       
        
    };
    countPositiveFeedbackPercentage () {
        const { good } = this.state;
        return Math.round(good / this.countTotalFeedback() *100)
    };


    render() { 
        const { good, neutral, bad } = this.state;
        
        return (
           <div className='feedbackForm'>
               
    
                <Section title="Place leave feedback">
                    <FeedbackOptions
                    handleGood={this.handleGood}
                    handleNeutral={this.handleNeutral}
                    handleBab={this.handleBab}
                />
                </Section>

                <Section title="Statistics">

                    {this.countTotalFeedback() > 0 ? 
                  <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback()}
                    FeedbackPercentage={this.countPositiveFeedbackPercentage()}
                /> : <Notification message="There is no feedback"/>}  
                    
                </Section>
            </div>
        );
    }
};

export default App;