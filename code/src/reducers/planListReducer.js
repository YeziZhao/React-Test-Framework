import initialState from './initialState';
import * as types from '../actions/actionTypes';
import {
    fromJS,
    Map,
    Seq,
    List
} from 'immutable';
import _ from 'lodash';

const planListReducer = function(state = initialState.planList, action) {
    switch (action.type) {
        case types.INIT_PLANLIST:
            return initPlanList(state, action);
        default:
            return state;
    }
};
function initPlanList(state, action) {
    return action.planList;
}

export default planListReducer;