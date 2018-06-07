import axios from 'axios';
import _ from 'lodash';
import configs from '../configs';
import {
    version
} from '../../models';
import {
    utils
} from '../../services';
function createAppVersion(data = version) {
    const formData = new FormData();
    const {
        serviceId,
        applicationId,
        osPlatformId,
        appVerNum,
        installFile,
        versionFile,
        description
    } = data;
    formData.append('serviceId', serviceId);
    formData.append('applicationId', applicationId);
    formData.append('osPlatformId', osPlatformId);
    formData.append('appVerNum', appVerNum);
    formData.append('installFile', utils.jsToFile(installFile));
    formData.append('versionFile', utils.jsToFile(versionFile));
    formData.append('description', description);
    return axios({
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        url: '/mockjsdata/1/api/createAppVersion',
        data: formData
    })
    .then((response) => {
        return response.data;
    });
}
export default createAppVersion;
// WIKI: http://wiki.navercorp.com/display/gdc/Create+App+Version