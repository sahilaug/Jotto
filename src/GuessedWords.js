import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = props => {
    return (
        <div>
            
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
