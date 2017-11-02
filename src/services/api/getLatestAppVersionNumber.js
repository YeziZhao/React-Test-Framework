import axios from 'axios';
import _ from 'lodash';
import configs from '../configs';
import initialState from '../../models';
function getLatestAppVersionNumber({
    serviceId = initialState.version.serviceId,
    applicationId = initialState.version.applicationId,
    osPlatformId = initialState.version.osPlatformId
}) {
    return axios({
        method: 'GET',
        url: '/mockjsdata/1/api/services'
    })
    .then((response) => {
        return response.data;
    });
}
export default getLatestAppVersionNumber;
// WIKI: http://wiki.navercorp.com/display/gdc/Get+Latest+App+Version+Number