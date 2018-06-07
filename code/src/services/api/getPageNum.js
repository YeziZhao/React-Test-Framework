import axios from 'axios';
import _ from 'lodash';
import configs from '../configs';

function getPageNum(idcType,query) {
    return axios({
        method: 'GET',
        url: `/mockjsdata/1/api/${idcType}/message/totalPageNum`,
        params: {query}
    })
    .then((response) => {
        return response.data;
    });
}
export default getPageNum;
// WIKI: 没有地址