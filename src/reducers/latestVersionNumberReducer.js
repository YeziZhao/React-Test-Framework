import initialState from './initialState';
import * as types from '../actions/actionTypes';
import {
    fromJS,
    Map,
    Seq,
    List
} from 'immutable';
import _ from 'lodash';
const latestVersionNumberReducer = function(state = initialState.latestVersionNumber, action) {
    switch (action.type) {
        case types.INIT_LATEST_VERSION_NUMBER:
            return initLatestVersionNumber(state, action);
        case types.GET_LATEST_VERSION_NUMBER:
            return getLatestVersionNumber(state, action);
        default:
            return state;
    }
};
function initLatestVersionNumber(state, action) {
    return initialState.latestVersionNumber;
}
function getLatestVersionNumber(state, action) {
    return action.latestVersionNumber;
}
export default latestVersionNumberReducer;