import moment from 'moment';
import { timezone } from '../services/utils';

const worksListQuery = {
    idcType: 'kr',
    productType: '',
    acceptorLevelStr: 'ALL',
    startDate: timezone(moment().add(-6, 'day'), 'Asia/Seoul'),
    endDate: timezone(moment().add(+7, 'day'), 'Asia/Seoul'),
    pageSize: 30, //每页多少条
    pageNo: 1,//当前页
    totalPageNum: 1,//总页数
    totalCount: 0//总条数
};

export default worksListQuery;