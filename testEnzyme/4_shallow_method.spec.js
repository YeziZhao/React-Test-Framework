import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import ChildTextareaComponent from './TextareaComponent_child';




//对象查找
describe('shallow_( at, childAt, children, closet)', () => {

    //at: 返回wrapper指定位置的子组件的DOM节点
    it('shallow_at', () => {
        let title = 'hello';
            const wrapper = shallow(<ChildTextareaComponent title={title}/>);
            console.log(wrapper.html());
            console.log(wrapper.find('textarea').children());
            // expect(wrapper.find('textarea').at(0).value).to.equal('hello');
    });
});