import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import ApplicationComponent from '../../../src/components/ComposeComponent/ApplicationComponent';

const props = {
    version: {
        applicaionId: '1'
    },
    applications: [
        {
            id:'1',
            applicationName: 'oneApp'
        },
        {
            id:'2',
            applicationName: 'nDriver'
        }
    ],
    handleChangeApplication: () => {console.log('---------')}
};

describe('CheckInput component', () => {
    const wrapper = mount(<ApplicationComponent {...props} />)
    console.log(wrapper.debug());
    it('the application option render ', () => {
        expect(wrapper.find('select').children().length).to.be.equal(3);
        expect(wrapper.find('select').childAt(1).text()).to.be.equal('oneApp');
        expect(wrapper.find('select').childAt(2).text()).to.be.equal('nDriver');
    });
    it('the application option slecected values', () => {
        expect(wrapper.find('select').prop('value')).to.be.equal('1');
    });
    it('the option onChange method be called', () => {
        expect(wrapper.find('select').simulate('change'),{target: { value: '2'}}); //只会去触发onChange事件，并不会去证明这个方法有没有，没有也不会报错
    });
  })
  