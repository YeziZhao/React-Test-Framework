import React from 'react';
import moment from 'moment';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import MsgContentComponent from '../../../src/components/WorksListComponent/MsgContentComponent';
import {
	idcTypes,
	worksListQuery,
    planList,
    acceptorLevels
}from '../../../src/models';
describe('QueryComponent', () => {
	// const idcTypeSpy =  sinon.spy();
   
	const props = {
		no: 100,
		
    };

	const wrapper = mount(<MsgContentComponent {...props}/>);
	it('MsgContentComponent' , () => {
    	expect(wrapper.find('tr').length).to.be.equal(1);
	});
	

  })