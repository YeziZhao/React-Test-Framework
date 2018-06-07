import React from 'react';
import moment from 'moment';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { QueryComponent } from '../../../src/components/WorksListComponent';
import {
	idcTypes,
	worksListQuery,
    planList,
    acceptorLevels
}from '../../../src/models';
describe('QueryComponent', () => {
	const idcTypeSpy =  sinon.spy();
    const planListpy = sinon.spy();
    const acceptlevelPy = sinon.spy();
    const startDateSpy = sinon.spy();
    const endDateSpy = sinon.spy();
    const submitSpy = sinon.spy();
	const props = {
		worksListQuery: worksListQuery, 
		idcTypes: idcTypes, 
		handChangeIdcType: idcTypeSpy,
		planList: planList,
        handChangeProductType: planListpy,
        acceptorLevels: acceptorLevels,
        handChangeAcceptorLevel: acceptlevelPy,
        handChangeStartDate: startDateSpy,
        handChangeEndDate: endDateSpy,
        search: submitSpy
    };

	const wrapper = mount(<QueryComponent {...props}/>);
    const wrapperShallow = shallow(<QueryComponent {...props}/>);
	it('QueryComponent_select choose' , () => {
    	expect(wrapper.find('SelectInput > #idcType').length).to.be.equal(1);
	});
	it('QueryComponent_idcType_select', () => {
		expect(wrapper.find('SelectInput > #idcType').prop('value')).to.be.equal(worksListQuery.idcType);
		expect(wrapper.find('#idcType > option').length).to.be.equal(2);
	});

	it('QueryComponent_idcType_handMethod', () => {
		wrapper.find('SelectInput > #idcType').simulate('change');
        expect(idcTypeSpy.called).to.be.equal(true);
        expect(idcTypeSpy.calledOnce).to.be.equal(true);
	});
	it('QueryComponent_planList_select', () => {
		expect(wrapper.find('SelectInput > #productType').prop('value')).to.be.equal(worksListQuery.productType);
		expect(wrapper.find('#productType > option').length).to.be.equal(1);
	});

	it('QueryComponent_planList_handMethod', () => {
		wrapper.find('SelectInput > #productType').simulate('change');
        expect(planListpy.called).to.be.equal(true);
        expect(planListpy.calledOnce).to.be.equal(true);
    });
    
    it('QueryComponent_AceeptortLevelStr_select', () => {
        expect(wrapper.find('SelectInput > #acceptLevel').prop('value')).to.be.equal(worksListQuery.acceptorLevelStr);
        expect(wrapper.find('#acceptLevel > option').length).to.be.eql(2);
    });
    
    it('QueryComponent_AceeptortLevelStr_handMethod', () => {
		wrapper.find('SelectInput > #acceptLevel').simulate('change');
        expect(acceptlevelPy.called).to.be.equal(true);
        expect(acceptlevelPy.calledOnce).to.be.equal(true);
    });
    
    it('QueryComponent_beginTime_select', () => {
        expect(wrapper.find('DatePicker').first().prop('selected')).to.be.equal(worksListQuery.startDate);
    });

    it('QueryComponent_beginTime_handleMethod', () => {
		wrapperShallow.find('DatePicker').first().simulate('change',moment().add(-1, 'day'));
        expect(startDateSpy.called).to.be.equal(true);
        expect(startDateSpy.calledOnce).to.be.equal(true);
    });
    
    it('QueryComponent_endTime_select', () => {
        expect(wrapper.find('DatePicker').first().prop('selected')).to.be.equal(worksListQuery.startDate);
    });

    it('QueryComponent_endTime_handleMethod', () => {
		wrapperShallow.find('DatePicker').last().simulate('change',moment().add(+6, 'day'));
        expect(endDateSpy.called).to.be.equal(true);
        expect(endDateSpy.calledOnce).to.be.equal(true);
    });
  
    it('QueryComponent_seachMethod', () => {
		wrapperShallow.find('a').simulate('click');
        expect(submitSpy.called).to.be.equal(true);
        expect(submitSpy.calledOnce).to.be.equal(true);
    });

    // it('QueryComponent_table', );

  })