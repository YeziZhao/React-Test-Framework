import initialState from './initialState';
import * as types from '../actions/actionTypes';
import {
    fromJS,
    Map,
    Seq,
    List
} from 'immutable';
import _ from 'lodash';
const versionReducer = function(state = initialState.version, action) {
    switch (action.type) {
        case types.INIT_SERVICE_ID:
            return initServiceId(state, action);
        case types.INIT_APPLICATION_ID:
            return initApplicationId(state, action);
        case types.INIT_OS_PLATFORM_ID:
            return initOSPlatformId(state, action);
        case types.INIT_APP_VER_NUM:
            return initAppVerNum(state, action);
        case types.INIT_INSTALL_FILE:
            return initInstallFile(state, action);
        case types.INIT_VERSION_FILE:
            return initVersionFile(state, action);
        case types.INIT_DESCRIPTION:
            return initDescription(state, action);
        case types.CHANGE_SERVICE_ID:
            return changeServiceId(state, action);
        case types.CHANGE_APPLICATION_ID:
            return changeApplicationId(state, action);
        case types.CHANGE_OS_PLATFORM_ID:
            return changeOSPlatformId(state, action);
        case types.CHANGE_APP_VER_NUM:
            return changeAppVerNum(state, action);
        case types.CHANGE_INSTALL_FILE:
            return changeInstallFile(state, action);
        case types.CHANGE_VERSION_FILE:
            return changeVersionFile(state, action);
        case types.CHANGE_DESCRIPTION:
            return changeDescription(state, action);
        default:
            return state;
    }
};
function initServiceId(state, action) {
    return fromJS(state)
        .setIn(['serviceId'], initialState.version.serviceId)
        .toJS();
}
function initApplicationId(state, action) {
    return fromJS(state)
        .setIn(['applicationId'], initialState.version.applicationId)
        .toJS();
}
function initOSPlatformId(state, action) {
    return fromJS(state)
        .setIn(['osPlatformId'], initialState.version.osPlatformId)
        .toJS();
}
function initAppVerNum(state, action) {
    return fromJS(state)
        .setIn(['appVerNum'], initialState.version.appVerNum)
        .toJS();
}
function initInstallFile(state, action) {
    return fromJS(state)
        .setIn(['installFile'], initialState.version.installFile)
        .toJS();
}
function initVersionFile(state, action) {
    return fromJS(state)
        .setIn(['versionFile'], initialState.version.versionFile)
        .toJS();
}
function initDescription(state, action) {
    return fromJS(state)
        .setIn(['description'], initialState.version.description)
        .toJS();
}
function changeServiceId(state, action) {
    const { 
        serviceId
     } = action;
    return fromJS(state)
        .setIn(['serviceId'], serviceId)
        .toJS();
}
function changeApplicationId(state, action) {
    const {
        applicationId
    } = action;
    return fromJS(state)
        .setIn(['applicationId'], applicationId)
        .toJS();
}
function changeOSPlatformId(state, action) {
    const {
        osPlatformId
    } = action;
    return fromJS(state)
        .setIn(['osPlatformId'], osPlatformId)
        .toJS();
}
function changeAppVerNum(state, action) {
    const {
        appVerNum
    } = action;
    return fromJS(state)
        .setIn(['appVerNum'], appVerNum)
        .toJS();
}
function changeInstallFile(state, action) {
    let {
        installFile
    } = action;
    installFile = _.cloneDeep(installFile);
    return fromJS(state)
        .setIn(['installFile'], installFile)
        .toJS();
}
function changeVersionFile(state, action) {
    let {
        versionFile
    } = action;
    versionFile = _.cloneDeep(versionFile);
    return fromJS(state)
        .setIn(['versionFile'], versionFile)
        .toJS();
}
function changeDescription(state, action) {
    let {
        description
    } = action;
    return fromJS(state)
        .setIn(['description'], description)
        .toJS();
}
export default versionReducer;