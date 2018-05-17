import { expect } from 'chai';
import React from 'react';
import { shallow ,mount } from 'enzyme';
require("babel-polyfill");
import {
    AddListComponent
} from '../../src/components/ListAddComponent';
describe('AddListComponent', () => {
    
    it('the component should ul', () => {
        const wrapper = shallow(<AddListComponent  datas={[]}/>);
        expect(wrapper.contains(
            <ul />
        )).to.be.equal(true);
    });

    it('the component should have ul', () => {
        const wrapper = shallow(<AddListComponent  datas={[ 1, 2]}/>);
        expect(wrapper.find('li').length).to.be.equal(2);
    });
});

