import { actionTypes } from '../actions';
import successReducer from './successReducer';

describe('tests reducers', () => {
    test('returns default reducer state of `false` when no action is passed', () => {
        const newState = successReducer(undefined, {});
        expect(newState).toBe(false);
    });

    test('returns reducer state `true` when action of type `CORRECT_GUESS` is recieved', () => {
        const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
        expect(newState).toBe(true);
    })
})
