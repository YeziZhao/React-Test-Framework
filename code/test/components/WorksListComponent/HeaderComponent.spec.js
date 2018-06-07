import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { HeaderComponent } from '../../../src/components/WorksListComponent';
import { MESSAGES as M } from '../../../src/services';
describe('HeaderComponent', () => {
	const wrapper = shallow(<HeaderComponent />)
	it('the title : Successfully sent & Reserved to be sent' , () => {
		expect(wrapper.find('span').text()).to.be.equal(M.WORKS_LIST_TITLE);
	});
})
