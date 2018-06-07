import initialState from './initialState';
import * as types from '../actions/actionTypes';
import {
    fromJS,
    Map,
    Seq,
    List
} from 'immutable';
import _ from 'lodash';

const planListReducer = function(state = initialState.messages, action) {
    switch (action.type) {
        case types.SET_MESSAGES:
            return setMessages(state, action);
        default:
            return state;
    }
};
function setMessages(state, action) {
    return action.messages;
}

export default planListReducer;