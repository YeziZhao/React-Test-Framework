import { expect } from 'chai';
import moment from 'moment';
import * as worksActions from '../../src/actions/worksActions';
import * as types from '../../src/actions/actionTypes';
import { timezone } from '../../src/services/utils';

describe('worksActions', () => {
    it('worksActions_changeIdcTypeSuccess', () => {
        const action = worksActions.changeIdcTypeSuccess('jp');
        expect(action).to.be.deep.equal({
            type:types.CHANGE_IDCTYPE,
            idcType: 'jp'
        });
    });

    it('worksActions_changeProductType', () => {
        const action = worksActions.changeProductType('BS');
        expect(action).to.be.deep.equal({
            type:types.CHAGNE_PRODUCTTYPE,
            productType: 'BS'
        });
    });

    it('worksActions_changeAcceptorLevel', () => {
        const action = worksActions.changeAcceptorLevel('ALL');
        expect(action).to.be.deep.equal({
            type:types.CHAGNE_ACCEPTORLEVEL,
            acceptorLevelStr: 'ALL'
        });
    });

    
    it('worksActions_changeStartDate', () => {
        let startDate = moment();
        const action = worksActions.changeStartDate(startDate);
        expect(action).to.be.deep.equal({
            type:types.CHANGE_STARTDATE,
            startDate
        });
    });

    it('worksActions_changEndDate', () => {
        let endDate = moment();
        const action = worksActions.changeEndDate(endDate);
        expect(action).to.be.deep.equal({
            type:types.CHANGE_ENDDATE,
            endDate
        });
    });

    it('worksActions_changePageSize', () => {
        const action = worksActions.changePageSize(60);
        expect(action).to.be.deep.equal({
            type:types.CHANGE_PAGESIZE,
            pageSize: 60
        });
    });
    it('worksActions_setTotalCount', () => {
        const action = worksActions.setTotalCount(60);
        expect(action).to.be.deep.equal({
            type:types.SET_TOTALCOUNT,
            totalCount: 60
        });
    });

    it('worksActions_setTotalPageNum', () => {
        const action = worksActions.setTotalPageNum(60);
        expect(action).to.be.deep.equal({
            type:types.SET_TOTALPAGENUM,
            totalPageNum: 60
        });
    });
    it('worksActions_setPageNo', () => {
        const action = worksActions.setPageNo(60);
        expect(action).to.be.deep.equal({
            type:types.SET_PAGENO,
            pageNo: 60
        });
    });
    
});

