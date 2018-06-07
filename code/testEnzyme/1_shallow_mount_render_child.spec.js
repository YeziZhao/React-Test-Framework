
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import ChildTextareaComponent from './TextareaComponent_Child';

describe('<shallow__ChildTextareaComponent />', () => {
    let title = 'hello';
    const wrapper = shallow(<ChildTextareaComponent title={title}/>);
    //wrapper.html()： 虽然调用html方法返回的内容是有子组件的，但是实际在判断的时候没有
    it('contains____should contains a textarea input ' , () => {
        expect(wrapper.find('#idChild')).to.have.length(1);
        expect(wrapper.find('textarea')).to.not.have.length(1);
        expect(wrapper.find('TextareaComponent')).to.have.length(1); //子组件没被渲染出来
    });
});


describe('<mount_ChildTextareaComponent />', () => {
    const wrapper = mount(<ChildTextareaComponent/>);
    it('should contains a textarea input ' , () => {
        
        expect(wrapper.find('textarea')).to.have.length(1);
        expect(wrapper.find('textarea').contains(<textarea name="title" rows="3" cols="102" placeholder="please enter value" value='childTitle' />)).to.equal(true);
    });
});

// render是将组件解析为hmtl静态文件。使用了第三方Cheerio库。
describe('<render_ChildTextareaComponent />', () => {
    let title = 'hello';
    const wrapper = render(<ChildTextareaComponent title={title}/>);
    it('should contains a textarea input ' , () => {
        console.log(wrapper.html());
        expect(wrapper.find('textarea')).to.have.length(1);
        expect(wrapper.find('TextareaComponent')).to.not.have.length(1); //全被解析为静态文件了
    });
});

