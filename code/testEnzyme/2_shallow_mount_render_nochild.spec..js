// import React from 'react';
// import { shallow, mount, render } from 'enzyme';
// import sinon from 'sinon';
// import { expect } from 'chai';
// import NoChildTextareaComponent from './TextareaComponent_noChild';

// describe('<shallow_NoChildTextareaComponent />', () => {
//     let title = 'hello';
//     const wrapper = shallow(<NoChildTextareaComponent title={title}/>);
//     it('should contains a textarea input ' , () => {
//         expect(wrapper.contains(<textarea name="title" rows="3" cols="102" placeholder="please enter value" value='hello' />)).to.be.equal(true);
//     });
//     it('textarea length should equal 1 ' , () => {
//         expect(wrapper.find('textarea').length).to.be.equal(1);
//     });
// });


// describe('<mount_NoChildTextareaComponent />', () => {
//     let title = 'hello';
//     const wrapper = mount(<NoChildTextareaComponent title={title}/>);
//     it('should contains a textarea input ' , () => {
//         expect(wrapper.contains(<textarea name="title" rows="3" cols="102" placeholder="please enter value" value='hello' />)).to.be.equal(true);
//     });
//     it('textarea length should equal 1 ' , () => {
//         expect(wrapper.find('textarea').length).to.be.equal(1);
//     });
// });

// //render是将组件解析为hmtl静态文件。使用了第三方Cheerio库。
// describe('<render_NoChildTextareaComponent />', () => {
//     let title = 'hello';
//     const wrapper = render(<NoChildTextareaComponent title={title}/>);
//     // <textarea name="title" rows="3" cols="102" placeholder="please enter value">hello</textarea>)
//     it('should contains a textarea input ' , () => {
//         expect(wrapper.find('textarea')).to.not.be.null;
//     });
//     it('textarea length should equal 1 ' , () => {
//         expect(wrapper.find('textarea').length).to.be.equal(1);
//     });
// });