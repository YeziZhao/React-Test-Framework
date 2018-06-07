import axios from 'axios';
import _ from 'lodash';
import configs from '../configs';

function getMessages(idcType,query) {
    return axios({
        method: 'GET',
        url: `/mockjsdata/1/api/ncs/message/list`,
        params: {query}
    })
    .then((response) => {
        return response.data;
    });
}
export default getMessages;
// WIKI: http://wiki.navercorp.com/display/gdc/List+API