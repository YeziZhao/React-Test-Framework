import initialState from './initialState';
import * as types from '../actions/actionTypes';
import {
    fromJS,
    Map,
    Seq,
    List
} from 'immutable';
import _ from 'lodash';
const idcTypesReducer = function(state = initialState.idcTypes, action) {
    switch (action.type) {
        default:
            return state;
    }
};

export default idcTypesReducer;