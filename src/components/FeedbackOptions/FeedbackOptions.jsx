import React from 'react';
import style from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({options,onLeaveFeedback,}) => {
    return (
        <div>
            {options.map(option => {
                return ( 
                  <button
                className={style.feedback_btn}
                type='button'
                name='good'
                key={option}
                onClick={() => onLeaveFeedback(option)}>
                {option}
            </button> 
               )
           })}
         
        </div>
)
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback:PropTypes.func.isRequired,
}