import axios from 'axios';
import _ from 'lodash';
import configs from '../configs';
function getServices() {
    return axios({
        method: 'GET',
        url: `${configs.domain}/api/common/getServices`
    })
    .then((response) => {
        return response.data;
    });
}
export default getServices;
// WIKI: http://wiki.navercorp.com/display/gdc/Get+Target+OS+Platform+List