import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import  sinon from 'sinon';
require("babel-polyfill");
import {
    InputAreaComponent
} from '../../src/components/ListAddComponent';
describe('InputAreaComponent', () => {
    
    it('the component should contain the input and button', () => {
        const wrapper = shallow(<InputAreaComponent />);
        expect(wrapper.containsAllMatchingElements([
            <input />,
            <button>add</button>
        ])).to.be.equal(true);
    });

    it('testing the input onChange', () => {
        const changeMock = sinon.spy();
        let props = {
            textChange: changeMock,
        };
        const wrapper = shallow(<InputAreaComponent {...props}/>);
        wrapper.find('input').simulate('change', {target: {value: 'input value'}});
        expect(changeMock.calledWith({target: {value: 'input value'}})).to.equal(true);
        expect(changeMock.calledOnce).to.equal(true);
    });

    it('testing the input onSubmit', () => {
        const changeMock = sinon.spy();
        let props = {
            onSubmit: changeMock
        };
        const wrapper = shallow(<InputAreaComponent {...props}/>);
        wrapper.find('button').simulate('submit', {target: {value: 'submit value'}});
        expect(changeMock.calledOnce).to.equal(true);
    });
    
});


