import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDom from 'react-dom';
import { mount } from 'enzyme';
import { expect } from 'chai';
import ComposeContainer from '../../src/containers/ComposeContainer';
import configureStore from '../../src/store/configureStore';
import * as deployementAction from '../../src/actions/deploymentSystemActions';
import * as types from '../../src/actions/actionTypes';
require("babel-polyfill");

const store = configureStore();
let wrapper ;

    describe('container test suite', () => {

        before("before hooks", function() {
            wrapper = mount (
               <Provider store={store}>
                   <ComposeContainer />
               </Provider>
               ,{
                   lifecycleExperimental: true, 
                   disableLifecycleMethods: false
               })
        });
        // Mocha不知道container里面初始化中执行了异步，只能识别异步时返回promise,因此就没有等待异步执行直接下一步，因此需要使用setTimeout让其等待一下
        it('container_timeout_getData', () => {
            setTimeout(function (){  
                expect(wrapper.props().store.getState().services.length).to.be.equal(7);
            },500); 
        });

        it('container_changeMethod', () => {
            wrapper.find('#service').simulate('change',{target: { value: 2}}); 
            expect(wrapper.find('#service').prop('value')).to.equal(2);
            expect(wrapper.props().store.getState().version.serviceId).to.be.equal(2);
        });

    });
  
 
