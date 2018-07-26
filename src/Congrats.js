import React, { Component } from 'react';

/**
 * Functional component for congrats message
 * @class Congrats
 * @param {object} props- React Props
 * @returns {JSX.Element}
 */
export default (props) => {
    return props.success ? <div data-test="component-congrats">
        <span data-test="congrats-message">Congratulations ! You have guessed the right word</span></div> : <div data-test="component-congrats" />;
}