import React, { useState } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Staticsics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';


const App = () => {

    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });

    const onLeaveFeedback = (type) => {
        
        setFeedback((prevState) => ({
            ...prevState,
            [type]: prevState[type] + 1,
        }))
    };
    

    const countTotalFeedback = () => {
        const { good, neutral, bad } = feedback;
        return good + neutral + bad;
    };


    const countPositiveFeedbackPercentage = () => {
        const { good } = feedback;
        return Math.round((good / countTotalFeedback()) * 100)
    };


    const { good, neutral, bad } = feedback;

    return (

        <div className='feedbackForm'>
            <Section title="Place leave feedback">
                <FeedbackOptions
                    options={Object.keys(feedback)}
                    onLeaveFeedback={onLeaveFeedback}
                />
            </Section>

            <Section title="Statistics">

                {countTotalFeedback() > 0 ?
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        FeedbackPercentage={countPositiveFeedbackPercentage()}
                    /> : <Notification message="There is no feedback" />}
                    
            </Section>
        </div>
    );
};

export default App;