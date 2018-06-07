import axios from 'axios';
import _ from 'lodash';
import configs from '../configs';
import initialState from '../../models';
function getPlainList(idcType) {
    return axios({
        method: 'GET',
        url: `/mockjsdata/1/api/${idcType}/plan/list`
    })
    .then((response) => {
        return response.data;
    });
}
export default getPlainList;
// WIKI: http://wiki.navercorp.com/display/gdc/New+Get+Plan+List+By+Idc+Api