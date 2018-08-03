import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr , checkProps} from '../test/testUtils';
import Congrats from './Congrats'

const defaultProps = { success: false };

/**
 * Factory function to create a ShallowWrapper for congrats component
 * @function setup
 * @param  {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps} />);
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
    checkProps(Congrats.propTypes, expectedProps);
})