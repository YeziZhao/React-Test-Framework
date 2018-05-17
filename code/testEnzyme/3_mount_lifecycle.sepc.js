import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import TextareaComponent from './TextareaComponent_lifecycle';
import AttachToComponent from './TextareaComponent_nochild';

//shallow 方法会返回一个包装实例，组件不会被渲染成为真实的 DOM.由于 React 组件的子组件未被渲染，被测组件的生命周期也无法测试完整
//要测试完整的生命周期，最好使用 mount 方法，mount 方法会将 React 组件渲染成真实的DOM元素，所以需要浏览器环境，在一般项目中，可以使用 jsdom 去模拟浏览器环境。
//componentDidMount 测试中只执行一次，componentDidUpdate 每次修改state都会执行

//备注：要测试shallow or render,将wrapper初始化时将mount方式修改为shallow or render即可
//shallow or render  不会调用生命周期方法
describe('mount_lifeCycle(lifeCycle,context, state, setState, setProps)', () => {

    //warapper初始化 的option配置
    //context： 可以在用例中直接获取内容
    //disableLifecycleMethods： true: componentDidMount和componentDidUpdate(setProps和setContent调用之后)不会调用。默认为false
    //lifecycleExperimental: true:componentDidMount和componentDidUpdate会被调用。 （v2版本默认为false,v3版本默认为true）
    let wrapper = mount(
    <TextareaComponent title='mountTitle' />,
    {
        context: "mount_context", 
        lifecycleExperimental: true, 
        disableLifecycleMethods: false
    });
    //options： 获取wrapper的上下文配置
    it('mount_context', () => {
        console.log('mount lifecycle-----------');
        expect(wrapper.options.context).to.be.equal('mount_context');
        expect(wrapper.options.lifecycleExperimental).to.be.equal(true);
    });

    it('mount_state', () => {
        expect(wrapper.state().name).to.be.equal('foo')
    });

    // setState: 设置wrapper的state.第二个参数接受回调函数
    it('mount_state_setState', () => {
        expect(wrapper.state().name).to.be.equal('foo') //查找代码中默认state值
        wrapper.setState({ 
                name : "stateTitle"  //在测试用例中设置state
            }, () => console.log("回调"));
        expect(wrapper.state().name).to.be.equal('stateTitle')
    });
    
      
    
    
    it('mount_props_setProps', () => {
        expect(wrapper.props().title).to.be.equal('mountTitle'); //查找代码中默认props值
        wrapper.setProps({ title: 'updateTitle' });
        expect(wrapper.props().title).to.be.equal('updateTitle');
    });
});


