import React from 'react';
import moment from 'moment';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDom from 'react-dom';
import { expect } from 'chai';
import { shallow ,mount } from 'enzyme';
import configureStore from '../../src/store/configureStore';
import WorksListContainer from '../../src/containers/WorksListContainer'; 
import {
    HeaderComponent,
    QueryComponent,
    ListComponent
} from '../../src/components/WorksListComponent';
import { timezone } from '../../src/services/utils';

const store = configureStore();
let wrapper ;
describe("WorksListContainer", () => {
   
    before("before hooks", function() {
        wrapper = mount (
           <Provider store={store}>
               <WorksListContainer />
           </Provider>)
    });
   
    it('the container content', () => {
        expect(wrapper.containsAllMatchingElements([
            <HeaderComponent />,
            <QueryComponent />,
            <ListComponent />
            // <PaginationComponent />,
            // <PreviewComponent />,
            // <ReceiveHistoryComponent />,
            // <ResendHistoryCompoent />,
            // <AlertComponent />
        ])).to.equal(true);
    });
    it('the container method__handChangeIdcType', () => {
        wrapper.find('SelectInput > #idcType').simulate('change',{target: { value: 'jp'}});
        expect(wrapper.props().store.getState().worksListQuery.idcType).to.equal('jp');
    });

    it('the container method__handChangeProductType', (done) => {
        setTimeout(function (){  
            // expect(wrapper.find('SelectInput > #productType').children().length).to.equal(5);
            wrapper.find('SelectInput > #productType').simulate('change',{target: { value: 'BS'}});
            expect(wrapper.props().store.getState().worksListQuery.productType).to.equal('BS');
            done();
        },200); 
    });
    
    it('the container method__handChangeAcceptorLevel', () => {
        wrapper.find('SelectInput > #acceptLevel').simulate('change',{target: { value: 'ALL'}});
        expect(wrapper.props().store.getState().worksListQuery.acceptorLevelStr).to.equal('ALL');
    });

    it('the container method__handChangeStartDate', () => {
        // wrapper.find('#worksBeginTime input').props().onChange({target: { value: moment().add(+6, 'day') }})
        let startDate = timezone(moment(), 'Asia/Seoul');
        wrapper.find('DatePicker').first().find('input').simulate('change',{target: { value: startDate}});
        expect(wrapper.props().store.getState().worksListQuery.startDate.date()).to.eql(startDate.date());
    });

    it('the container method__handChangeEndDate', () => {
        let endDate = timezone(moment(new Date()), 'Asia/Seoul');
        wrapper.find('DatePicker').last().find('input').simulate('change',{target: { value: endDate}});
        expect(wrapper.props().store.getState().worksListQuery.endDate.date()).to.eql(endDate.date());
    });

    it('the container method_search', (done) => {
        wrapper.find('form > a').simulate('click');
        setTimeout(() => { expect(wrapper.props().store.getState().messages.length).to.be.equal(30); done();}, 500);
    });

    it('the container dom need time to render', () => {
        
        expect(wrapper.find('SelectInput > #productType').children().length).to.equal(wrapper.props().store.getState().planList.length+1);
    });

    it('the datas length show', (done) => {
        setTimeout(() => { 
            let count = wrapper.props().store.getState().messages.length;
            expect(Number(wrapper.find('Messages span>b').text())).to.equal(count); done();}, 500);
        
    });

    it('the pageSizes change', () => {
        wrapper.find('Messages select[name="pageSize"]').simulate('change', { target: { value: 60 }});
        expect(wrapper.props().store.getState().worksListQuery.pageSize).to.equal(60);
    });

    it('the pageSizes option', () => {
        expect(wrapper.find('Messages select[name="pageSize"]>option').length).to.be.equal(3);
    });
});