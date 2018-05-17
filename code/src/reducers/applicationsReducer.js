import initialState from './initialState';
import * as types from '../actions/actionTypes';
import {
    fromJS,
    Map,
    Seq,
    List
} from 'immutable';
import _ from 'lodash';
const applicationsReducer = function(state = initialState.applications, action) {
    switch (action.type) {
        case types.INIT_APPLICATIONS:
            return initApplications(state, action);
        case types.GET_APPLICATIONS:
            return getApplications(state, action);
        default:
            return state;
    }
};
function initApplications(state, action) {
    return initialState.applications;
}
function getApplications(state, action) {
    return action.applications;
}
export default applicationsReducer;