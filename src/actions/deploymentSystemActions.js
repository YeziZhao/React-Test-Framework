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
export function getServices() {
    return (dispatch) => {
        api.getServices()
        .then(({
            code,
            message,
            data: services
        }) => {
            if (code === 'SUCCESS') {
                dispatch(getServicesSuccess(services));
            }
            else {
                alert(message);
            }
        });
    };
}
export function getServicesSuccess(services) {
    return {
        type: types.GET_SERVICES,
        services
    };
}
export function getApplications({
    serviceId = defaultVersion.serviceId
}) {
    return (dispatch) => {
        api.getAppsBySrId({
            serviceId
        })
        .then(({
            code,
            message,
            data: applications
        }) => {
            if (code === 'SUCCESS') {
                dispatch(getApplicationsSuccess({
                    applications
                }));
            }
            else {
                alert(message);
            }
        });
    };
}
function getApplicationsSuccess({
    applications
}) {
    return {
        type: types.GET_APPLICATIONS,
        applications
    };
}
export function getOsPlatforms(data = {
    serviceId: defaultVersion.serviceId,
    applicationId: defaultVersion.applicationId
}) {
    return (dispatch) => {
        api.getOsPlatsBySrAndAppId(data)
        .then(({
            code,
            message,
            data: osPlatforms
        }) => {
            if (code === 'SUCCESS') {
                dispatch(getOsPlatformsSuccess({
                    osPlatforms
                }));
            }
            else {
                alert(message);
            }
        });
    };
}
function getOsPlatformsSuccess({
    osPlatforms
}) {
    return {
        type: types.GET_OS_PLATFORMS,
        osPlatforms
    };
}
export function changeServiceId({
    serviceId
} = defaultVersion) {
    return (dispatch) => {
        dispatch(changeServiceIdSuccess({
            serviceId
        }));
        dispatch(getApplications({
            serviceId
        }));
        dispatch(initApplicationIdSuccess());
        dispatch(initOSPlatformIdSuccess());
        dispatch(initOSPlatformsSuccess());
        dispatch(initLatestVersionNumberSuccess());
    };
}
function changeServiceIdSuccess({
    serviceId
}) {
    return {
        type: types.CHANGE_SERVICE_ID,
        serviceId
    };
}
export function changeApplicationId({
    serviceId,
    applicationId
} = defaultVersion) {
    return (dispatch) => {
        dispatch(changeApplicationIdSuccess({
            applicationId
        }));
        dispatch(getOsPlatforms({
            serviceId,
            applicationId
        }));
        dispatch(initOSPlatformIdSuccess());
        dispatch(initLatestVersionNumberSuccess());
    };
}
function changeApplicationIdSuccess({
    applicationId
} = defaultVersion) {
    return {
        type: types.CHANGE_APPLICATION_ID,
        applicationId
    };
}
export function changeOSPlatformId({
    serviceId,
    applicationId,
    osPlatformId
} = defaultVersion) {
    return (dispatch) => {
        dispatch(changeOSPlatformIdSuccess({
            osPlatformId
        }));
        dispatch(getLatestAppVersionNumber({
            serviceId,
            applicationId,
            osPlatformId
        }));
        dispatch(initInstallFileSuccess());
        dispatch(initVersionFileSuccess());
    };
}
function getLatestAppVersionNumber(data = {
    serviceId: defaultVersion.serviceId,
    applicationId: defaultVersion.applicationId,
    osPlatformId: defaultVersion.osPlatormId
}) {
    return (dispatch) => {
        api.getLatestAppVersionNumber(data)
        .then(({
            code,
            message,
            data
        }) => {
            if (code === 'SUCCESS') {
                dispatch(getLatestAppVersionNumberSuccess({
                    latestVersionNumber: data.appVerNum
                }));
            }
            else {
                alert(message);
            }
        });
    };
}
function getLatestAppVersionNumberSuccess({
    latestVersionNumber
}) {
    return {
        type: types.GET_LATEST_VERSION_NUMBER,
        latestVersionNumber
    };
}
function changeOSPlatformIdSuccess({
    osPlatformId
}) {
    return {
        type: types.CHANGE_OS_PLATFORM_ID,
        osPlatformId
    };
}
export function changeAppVerNum({
    appVerNum
} = defaultVersion) {
    return (dispatch) => {
        dispatch(changeAppVerNumSuccess({
            appVerNum
        }));
    };
}
function changeAppVerNumSuccess({
    appVerNum
}) {
    return {
        type: types.CHANGE_APP_VER_NUM,
        appVerNum
    };
}
export function changeInstallFile({
    installFile
} = defaultVersion) {
    return (dispatch) => {
        dispatch(changeInstallFileSuccess({
            installFile
        }));
    };
}
function changeInstallFileSuccess({
    installFile
}) {
    return {
        type: types.CHANGE_INSTALL_FILE,
        installFile
    };
}
export function changeVersionFile({
    versionFile
} = defaultVersion) {
    return (dispatch) => {
        dispatch(changeVersionFileSuccess({
            versionFile
        }));
    };
}
function changeVersionFileSuccess({
    versionFile
}) {
    return {
        type: types.CHANGE_VERSION_FILE,
        versionFile
    };
}
export function changeDescription({
    description
} = defaultVersion) {
    return (dispatch) => {
        dispatch(changeDescriptionSuccess({
            description
        }));
    };
}
function changeDescriptionSuccess({
    description
}) {
    return {
        type: types.CHANGE_DESCRIPTION,
        description
    };
}
export function createVersion(data = defaultVersion) {
    return (dispatch) => {
        api.createAppVersion(data)
        .then(({
            code,
            message,
            data
        }) => {
            if (code === 'SUCCESS') {
                alert('success');
                dispatch(createVersionSuccess());
            }
            else {
                alert(message);
            }
        });
    };
}
export function createVersionSuccess() {
    return {
        type: types.CREATE_VERSION
    };
}
export function initCompose() {
    return (dispatch) => {
        dispatch(initServiceIdSuccess());
        dispatch(initApplicationIdSuccess());
        dispatch(initOSPlatformIdSuccess());
        dispatch(initOSPlatformsSuccess());
        dispatch(initLatestVersionNumberSuccess());
        dispatch(initInstallFileSuccess());
        dispatch(initVersionFileSuccess());
        dispatch(getServices());
    };
}
function initServiceIdSuccess() {
    return {
        type: types.INIT_SERVICE_ID
    };
}
function initApplicationIdSuccess() {
    return {
        type: types.INIT_APPLICATION_ID
    };
}
function initOSPlatformIdSuccess() {
    return {
        type: types.INIT_OS_PLATFORM_ID
    };
}
function initServicesSuccess() {
    return {
        type: types.INIT_SERVICES
    };
}
function initApplicationsSuccess() {
    return {
        type: types.INIT_APPLICATIONS
    };
}
function initOSPlatformsSuccess() {
    return {
        type: types.INIT_OS_PLATFORMS
    };
}
function initAppVerNumSuccess() {
    return {
        type: types.INIT_APP_VER_NUM
    };
}
function initLatestVersionNumberSuccess() {
    return {
        type: types.INIT_LATEST_VERSION_NUMBER
    };
}
function initInstallFileSuccess() {
    return {
        type: types.INIT_INSTALL_FILE
    };
}
function initVersionFileSuccess() {
    return {
        type: types.INIT_VERSION_FILE
    };
}
function initDescriptionSuccess() {
    return {
        type: types.INIT_DESCRIPTION
    };
}