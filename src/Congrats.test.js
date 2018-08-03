import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr } from '../test/testUtils';
import Congrats from './Congrats'
import checkPropTypes from 'check-prop-types';

Enzyme.configure({ adapter: new EnzymeAdapter()});

/**
 * Factory function to create a ShallowWrapper for congrats component
 * @function setup
 * @param  {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    return shallow(<Congrats {...props} />);
};

test('renders without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

test('renders non empty congrats message when `success` prop is true', () => {
    const wrapper = setup({ success: true});
    const component = findByTestAttr(wrapper, 'congrats-message');
    expect(component.text().length).not.toBe(0);
});

test('does not throw error with correct props', () => {
    const expectedProps = setup({ success: false });
    const propError = checkPropTypes(Congrats.propTypes, expectedProps, 'props', Congrats.name);
    expect(propError).toBeUndefined();  
})