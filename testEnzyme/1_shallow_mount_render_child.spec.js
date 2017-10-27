// import React from 'react';
// import { shallow, mount, render } from 'enzyme';
// import sinon from 'sinon';
// import { expect } from 'chai';
// import ChildTextareaComponent from './TextareaComponent_Child';


// describe('<shallow__ChildTextareaComponent />', () => {
//     let title = 'hello';
//     const wrapper = shallow(<ChildTextareaComponent title={title}/>);
//     //wrapper.html()： 虽然调用html方法返回的内容是有子组件的，但是实际在判断的时候没有
//     it('contains____should contains a textarea input ' , () => {
//         expect(wrapper.contains(<textarea name="title" rows="3" cols="102" placeholder="please enter value" value='hello' />)).to.not.equal(true);
//         expect(wrapper.find('haveChild')).to.not.be.null;
//         expect(wrapper.find('textarea')).to.not.be.null;
//         expect(wrapper.find('textarea').value).to.not.be.equal('hello');
//     });
// });


// describe('<mount_ChildTextareaComponent />', () => {
//     let title = 'hello';
//     const wrapper = mount(<ChildTextareaComponent title={title}/>);
//     console.log(wrapper.html());
//     it('should contains a textarea input ' , () => {
//         expect(wrapper.contains(<textarea name="title" rows="3" cols="102" placeholder="please enter value" value='hello' />)).to.equal(true);
//     });
// });

// // render是将组件解析为hmtl静态文件。使用了第三方Cheerio库。
// describe('<render_ChildTextareaComponent />', () => {
//     let title = 'hello';
//     const wrapper = render(<ChildTextareaComponent title={title}/>);
//     console.log(wrapper.html());
//     it('should contains a textarea input ' , () => {
//         expect(wrapper.find('haveChild')).to.not.be.null;
//         expect(wrapper.find('textarea')).to.not.be.null;
//     });
// });

