import initialState from './initialState';
import * as types from '../actions/actionTypes';
import {
    fromJS,
    Map,
    Seq,
    List
} from 'immutable';
import _ from 'lodash';
const osPlatformsReducer = function(state = initialState.osPlatforms, action) {
    switch (action.type) {
        case types.INIT_OS_PLATFORMS:
            return initOSPlatforms(state, action);
        case types.GET_OS_PLATFORMS:
            return getOsPlatforms(state, action);
        default:
            return state;
    }
};
function initOSPlatforms(state, action) {
    return initialState.osPlatforms;
}
function getOsPlatforms(state, action) {
    return action.osPlatforms;
}
export default osPlatformsReducer;