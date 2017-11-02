import { expect } from 'chai';
import React from 'react';
import { shallow ,mount } from 'enzyme';
require("babel-polyfill");
import {
    AddListComponent,
    InputAreaComponent
} from '../../src/components/ListAddComponent';
import ListAddContainer from '../../src/containers/ListAddContainer';
describe('ListAddContainer', () => {
    
    it('the container should contain the InputArea and AddList component', () => {
        const wrapperShallow = shallow(<ListAddContainer />);
        expect(wrapperShallow.containsAllMatchingElements([
            <InputAreaComponent/>,
            <AddListComponent/>
        ])).to.be.equal(true);
    });

    it('testing the Container State', () => {
        const wrapper = mount(<ListAddContainer />);
        expect(wrapper.state('datas')).to.be.deep.equal([]);
    });

    it('testing add an item' , () => {
        const wrapper = mount(<ListAddContainer />);
        wrapper.instance().addItem('data1');
        expect(wrapper.state('datas')).to.be.deep.equal(['data1']);
    });

    it('testing the state text prop is exist ' , () => {
        const wrapper = mount(<ListAddContainer />);
        expect(wrapper.find('InputArea').prop('text')).to.equal('');
    });

    it('testing add the onSubmit method' , () => {
        const wrapper = mount(<ListAddContainer />);
        const addItem = wrapper.instance().addItem;
        expect(wrapper.find('InputArea').prop('onSubmit')).to.equal(addItem);
    });

    it('test textChange method', () => {
        const wrapper = mount(<ListAddContainer />);
        const textChange = wrapper.instance().textChange;
        expect(wrapper.find('InputArea').prop('textChange')).to.equal(textChange);
    });

    it('Verrifying the Binding' , () => {
        const wrapper = mount(<ListAddContainer />);
        wrapper.find(InputAreaComponent).prop('onSubmit')('handle method');
        expect(wrapper.state('datas')).to.be.deep.equal(['handle method']);
    });
    it('render the item' , () => {
        const wrapper = mount(<ListAddContainer />);
        wrapper.find('input').simulate('change', {target: {value: 'input value'}});
        expect(wrapper.state('text')).to.be.equal('input value');
        wrapper.find('button').simulate('submit');
        expect(wrapper.state('datas')).to.be.deep.equal([ 'input value' ]);
    });
});


