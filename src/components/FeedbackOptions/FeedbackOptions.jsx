import React from 'react';
import style from '../FeedbackOptions/FeedbackOptions.module.css';


const FeedbackOptions = ({handleGood, handleNeutral, handleBab}) => {
    return (
        <div>
            <button
                className={style.good_feedback_btn}
                type='button'
                name='good'
                onClick={handleGood}>
                good
            </button>
            <button
                className={style.neutral_feedback_btn}
                type='button'
                name='neutral'
                onClick={handleNeutral}>
                neutral
            </button>
            <button
                className={style.bad_feedback_btn}
                type='button'
                name='bad'
                onClick={handleBab}
            >
                bad
            </button>
        </div>
)
}

export default FeedbackOptions;