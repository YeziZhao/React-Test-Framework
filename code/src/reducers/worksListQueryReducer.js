import initialState from './initialState';
import * as types from '../actions/actionTypes';
import {
    fromJS,
    Map,
    Seq,
    List
} from 'immutable';
import _ from 'lodash';
const worksListQueryReducer = function(state = initialState.worksListQuery, action) {
    switch (action.type) {
        case types.CHANGE_IDCTYPE:
            return changeIdcType(state, action);
        case types.CHAGNE_PRODUCTTYPE:
            return changeProductType(state, action);
        case types.CHANGE_STARTDATE:
            return changeStartDate(state, action);
        case types.CHANGE_ENDDATE:
            return changeEndDate(state, action);
        case types.CHANGE_PAGESIZE:
            return changePageSize(state, action);
        case types.SET_TOTALCOUNT:
            return setTotalCount(state, action);
        case types.SET_TOTALPAGENUM:
            return setTotalPageNum(state, action);
        case types.SET_PAGENO:
            return setPageNo(state, action);
        default:
            return state;
    }
};

function changeIdcType(state, action) {
    return fromJS(state).setIn(['idcType'],action.idcType).toJS();
}
function changeProductType(state, action) {
    return fromJS(state).setIn(['productType'],action.productType).toJS();
}
function changeStartDate(state, action) {
    return fromJS(state).setIn(['startDate'],action.startDate).toJS();
}
function changeEndDate(state, action) {
    return fromJS(state).setIn(['endDate'],action.endDate).toJS();
}
function changePageSize(state, action) {
    return fromJS(state).setIn(['pageSize'], action.pageSize).toJS();
}
function setTotalCount(state, action) {
    return fromJS(state).setIn(['totalCount'],action.totalCount).toJS();
}
function setTotalPageNum(state, action) {
    return fromJS(state).setIn(['totalPageNum'],action.totalPageNum).toJS();
}
function setPageNo(state, action) {
    return fromJS(state).setIn(['pageNo'],action.pageNo).toJS();
}
export default worksListQueryReducer;