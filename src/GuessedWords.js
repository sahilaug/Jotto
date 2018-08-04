import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = props => {
    let contents = '';
    if(!props.guesssedWords.length) {
        contents = <div data-test="guess-instructions">Guess the Word !!</div>
    }
    return (
        <div data-test="component-guessed-words">
            { contents }
        </div>
    );
};

GuessedWords.propTypes = {
    guesssedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guesssedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        })
    ).isRequired
};

export default GuessedWords;
