import {
    API as api,
    MESSAGES as M
}from '../services';
import * as types from './actionTypes';
import _ from 'lodash';
import {
    version as defaultVersion
}  from '../models';
import {
    fromJS,
    Map
} from 'immutable';

export function changeIdcType(idcType) {
  
    return (dispatch) => {
        dispatch(getPlainList(idcType));
        dispatch(changeIdcTypeSuccess(idcType));
    };
}

export function changeIdcTypeSuccess(idcType) {
    return {
        type: types.CHANGE_IDCTYPE,
        idcType
    };
}

export function changeProductType(productType) {
    return {
        type: types.CHAGNE_PRODUCTTYPE,
        productType
    };
}

export function getPlainList(idcType) {
    return (dispatch) => {
        api.getPlanList(idcType).then(({ planList }) => {
            dispatch(planListSuccess(planList));
        });
   };
}

export function planListSuccess(planList) {
    return {
        type: types.INIT_PLANLIST,
        planList
    };
}

export function changeAcceptorLevel(acceptorLevelStr) {
    return {
        type: types.CHAGNE_ACCEPTORLEVEL,
        acceptorLevelStr
    };
}

export function changeStartDate(startDate) {
    return {
        type: types.CHANGE_STARTDATE,
        startDate
    };
}

export function changeEndDate(endDate) {
    return {
        type: types.CHANGE_ENDDATE,
        endDate
    };
}

export function getMessages(query) {
    return (dispatch) => {
        api.getMessages(query.idcType,query).then((res) => {
            dispatch(messagesSuccess(res.result));
        });
        api.getPageNum(query.idcType,query).then((res) => {
            dispatch(setTotalPageNum(res.result.totalPageNum));
            dispatch(setTotalCount(res.result.totalCount));
        });
    };
}

export function messagesSuccess(messages) {
    return {
        type: types.SET_MESSAGES,
        messages
    };
}

export function changePageSize(pageSize) {
    return {
        type: types.CHANGE_PAGESIZE,
        pageSize
    };
}

export function setTotalCount(totalCount) {
    return {
        type: types.SET_TOTALCOUNT,
        totalCount
    };
}

export function setTotalPageNum(totalPageNum) {
    return {
        type: types.SET_TOTALPAGENUM,
        totalPageNum
    };
}

export function setPageNo(pageNo) {
    return {
        type: types.SET_PAGENO,
        pageNo
    };
}