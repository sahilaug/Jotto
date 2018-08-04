import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
    guesssedWords : [ {guesssedWord: 'train', letterMatchCount: 3}]
};

/**
 * Factory function to create a ShallowWrapper for congrats component
 * @function setup
 * @param {object} props 
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps}  />)
}

test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
})

describe('if there are no words guessed', () => {
    const wrapper = setup({ guesssedWords : []});
    const component = findByTestAttr(wrapper, 'component-guessed-words')
    expect(component.length).toBe(1);
});

describe("if there are words guessed", () => {});