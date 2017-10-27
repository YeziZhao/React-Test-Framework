import initialState from './initialState';
import * as types from '../actions/actionTypes';
import {
    fromJS,
    Map,
    Seq,
    List
} from 'immutable';
import _ from 'lodash';
const servicesReducer = function(state = initialState.services, action) {
    switch (action.type) {
        case types.INIT_SERVICES:
            return initServices(state, action);
        case types.GET_SERVICES:
            return getServices(state, action);
        default:
            return state;
    }
};
function initServices(state, action) {
    return initialState.services;
}
function getServices(state, action) {
    return action.services;
}
export default servicesReducer;