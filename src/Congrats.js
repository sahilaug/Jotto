import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Functional component for congrats message
 * @class Congrats
 * @param {object} props- React Props
 * @returns {JSX.Element}
 */
const Congrats = (props) => {
    return props.success ? <div data-test="component-congrats">
        <span data-test="congrats-message" className="alert alert-success">Congratulations ! You have guessed the right word</span></div> : <div data-test="component-congrats" />;
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}

export default Congrats;