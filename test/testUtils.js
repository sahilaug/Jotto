import checkPropTypes from 'check-prop-types';
import rootReducer from '../src/reducers';
import { createStore } from 'redux';

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState);
}
/**
 * Return node(s) with given data-test attribute
 * @param  {ShallowWrapper} wrapper - Enzyme Shallow Wrapper
 * @param  {string} val - Value of data-test attribute for searching
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) =>  {
    return wrapper.find(`[data-test="${val}"]`);
    
};

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'props',
        component.name
    );
    expect(propError).toBeUndefined();
}