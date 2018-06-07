import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { ListComponent } from '../../../src/components/WorksListComponent';
import { MESSAGES as M } from '../../../src/services';
import { pageSizes } from '../../../src/models' ;
let pageSizeSpy = sinon.spy();

const props = {
	totalCount: 100,
	pageSize: 10,
	pageSizes: pageSizes,
	handChangePageSize: pageSizeSpy,
	messages:[
        {
            "productTypes": [
                "LT",
                "FREE"
            ],
            "idcType": "JP",
            "acceptorLevel": "ALL",
            "id": 1,
            "mbrId": "test_id",
            "successNum": 0,
            "isResend": "N",
            "totalNum": -1,
            "title": "123",
            "sendStatus": "SEND_COMPLETE",
            "notiTime": 1496394604542
        },
        {
            "productTypes": [
                "LT",
                "FREE"
            ],
            "idcType": "JP",
            "acceptorLevel": "ALL",
            "id": 2,
            "mbrId": "test_id",
            "successNum": 0,
            "isResend": "N",
            "totalNum": -1,
            "title": "123",
            "sendStatus": "SEND_COMPLETE",
            "notiTime": 1496394604542
        }
    ]
};
describe('ListComponent', () => {
	const wrapper = mount(<ListComponent {...props}/>);
	const wrapperShallow = shallow(<ListComponent {...props}/>);
	console.log(wrapper.text());
	it('ListComponent_the messages length' , () => {
		expect(wrapper.find('div > span').text()).to.be.equal(M.LIST_COUNT_TOTAL+props.totalCount+M.LIST_COUNT_LENGTH);
	});
	it('ListComponent_the pageSize value' , () => {
		expect(wrapperShallow.find('SelectInput').prop('value')).to.be.equal(props.pageSize);
	});
	it('ListComponent_the select length ', () => {
		expect(wrapper.find('select > option').length).to.be.equal(3);
	});

	it('ListComponent_the handChangePageSize is recalled ', () => {
		wrapper.find('select').simulate('change');
		expect(pageSizeSpy.called).to.be.equal(true);
		expect(pageSizeSpy.calledOnce).to.be.equal(true);
	});

	it('ListComponent_the table', () => {
		expect(wrapper.find('table MsgContent').length).to.be.equal(2);
	});
})
