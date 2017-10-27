// import React from 'react';
// import { shallow, mount, render } from 'enzyme';
// import sinon from 'sinon';
// import { expect } from 'chai';
// import TextareaComponent from './TextareaComponent_lifecycle';
// import AttachToComponent from './TextareaComponent_nochild';


// //shallow 的option配置
// //context： 可以在用例中直接获取内容
// //disableLifecycleMethods： true: componentDidMount和componentDidUpdate(setProps和setContent调用之后)不会调用。默认为false
// //lifecycleExperimental: true:componentDidMount和componentDidUpdate会被调用。 （v2版本默认为false,v3版本默认为true）


// //shallow 方法会返回一个包装实例，组件不会被渲染成为真实的 DOM.
// //由于 React 组件的子组件未被渲染，被测组件的生命周期也无法测试完整
// //要测试完整的生命周期，最好使用 mount 方法，mount 方法会将 React 组件渲染成真实的DOM元素，所以需要浏览器环境，在一般项目中，可以使用 jsdom 去模拟浏览器环境。
// describe('Shallow_option', () => {
//     it('option_context', () => {
//         console.log('shallow lifecycle----------');
//         let wrapper = shallow(
//                 <TextareaComponent  title='shallowTitle' />,
//                 {
//                     context: 'shallow_context', 
//                     lifecycleExperimental: true, 
//                     disableLifecycleMethods: false
//                 }
//             );
//         //获取options的数据
//         // console.log(wrapper.options);
//     });
// });

// describe('render_ option', () => {
//     it('option_context', () => {
//         console.log('render lifecycle------------');
//         let wrapper = render(
//             <TextareaComponent  title='renderTitle'/>,
//             {
//                 context: "render_context", 
//                 lifecycleExperimental: true, 
//                 disableLifecycleMethods: false
//             });
//     });
// });

// describe('mount_ option', () => {
//     it('option_context', () => {
//         console.log('mount lifecycle-----------');
//         let wrapper = mount(
//             <TextareaComponent title='mountTitle' />,
//             {
//                 context: "mount_context", 
//                 lifecycleExperimental: true, 
//                 disableLifecycleMethods: false
//             });
//         wrapper.setState({
//             stateTitle : "stateTitle"
//         });
//     });
// });


