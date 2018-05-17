import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import { CheckInput } from '../../../src/components/common';

let mockFunc = sinon.spy();
const props = { 
    id: 1, 
    name: 'test name', 
    label: 'test label', 
    value: 'test value', 
    checked: true, 
    readonly: false, 
    disabled: false,
    onChange: mockFunc
    // onChange: (target)=> {console.log("-------",target)}
 };

describe('CheckInput component', () => {
    const wrapper = shallow(<CheckInput {...props}/>)
    
    it('the props should be render', () => {
        expect(wrapper.find('input').prop('value')).to.be.contains('test value');
        expect(wrapper.find('input').prop('checked')).to.be.equal(true);
        expect(wrapper.find('input').prop('readOnly')).to.be.equal(false);
        expect(wrapper.find('input').prop('disabled')).to.be.equal(false);
        expect(wrapper.find('input').prop('name')).to.be.equal('test name');
    });
    
    it('the label should be render', () => {
        expect(wrapper.find('label').prop('htmlFor')).to.be.equal(1);
        expect(wrapper.find('label').text()).to.be.equal('test label');
    });
  
    it('the onChange method should be called', () => {
        expect(wrapper.find('input').simulate('change',{ target: {value: 'hello,world'} }));
        expect(mockFunc.called).to.be.equal(true); //如果函数实际没有被调用，mockFunc.called 会返回false
        expect(mockFunc.calledOnce).to.be.equal(true);
        expect(mockFunc.calledWith({target: {value: 'hello,world'}})).to.equal(true);
    });
  })
  