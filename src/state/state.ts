import { combineReducers } from 'redux';
import { Action, ActionType } from './action-types'

const initialState: string = '';

const reducer = (state: string = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SUBMIT:
            return action.payload;
        default: return state;
    }
}

export const reducers = combineReducers({
    form: reducer
});

export type State = ReturnType<typeof reducers>