// import React from 'react';
import PropTypes from 'prop-types';
import style from '../Notification/Notification.module.css'

export default function Notification  ({ message }) {
    return (
            <p className={style.title}> {message}</p>
    )
};

Notification.propTypes = {
    message: PropTypes.string.isRequired
};