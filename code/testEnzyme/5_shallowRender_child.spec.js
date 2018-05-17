import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import TextareaComponent from './TextareaComponent_child';
import ChildTextareaComponent from './TextareaComponent_nochild';

//shallow中渲染子组件(即使子组件里面还有子组件，也能渲染出来)only shallow的方法
describe('shallow(dive, shallow, render)', () => {
    //浅渲染，只渲染idChild的div.
    const wrapper = shallow(<TextareaComponent  title= 'parentTitle' />);

    it('shallow_dive', () => {
        //这里找到浅渲染组件中的ChildTextareaComponent，使用dive方法将其渲染出来
        expect(wrapper.find(ChildTextareaComponent).dive().find('textarea').length).to.be.equal(1);
        expect(wrapper.find(ChildTextareaComponent).find('textarea').length).to.be.equal(0);
    });
    
    it('shallow_shallow', () => {
        expect(wrapper.find(ChildTextareaComponent).shallow().find('textarea').length).to.be.equal(1);
    });
    it('shallow_render', () => {
        //对当前节点的使用Cheerio渲染，并返回CheerioWrapper
        expect(wrapper.find(ChildTextareaComponent).render().find('textarea').length).to.be.equal(1);
        // console.log(wrapper.debug());
    });
    });