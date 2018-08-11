import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import moduleName from './Input';



/** 
 * Factory function to create a ShallowWrapper for input component
 * @function setup
 * @param  {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
    const wrapper = shallow(<Input />);
    console.log('wrapper :', wrapper.debug());
};

describe('render', () => {
    describe('word has not been guessed', () => {
        test('renders component without error', () => {

        });
        test('renders input box', () => {

        });
        test('renders submit button', () => {

        });
    });
    describe('word has been guessed', () => {
        test('renders component without error', () => {

        });
        test('does not render input box', () => {

        });
        test('does not render submit button', () => {

        }); 
    });
});

describe('update state', () => {

});