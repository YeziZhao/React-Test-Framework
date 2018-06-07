import initialState from './initialState';
import * as types from '../actions/actionTypes';
import _ from 'lodash';

const pageSizesReducer = function(state = initialState.pageSizes, action) {
    switch (action.type) {
        default:
            return state;
    }
};
export default pageSizesReducer;