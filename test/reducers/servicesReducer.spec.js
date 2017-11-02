import React from 'react';
import serviceReducer from '../../src/reducers/servicesReducer';
import * as types from '../../src/actions/actionTypes';
import { expect } from 'chai';
const initState = [];

describe('reducers should return the new state after applying the action to the previous state', () => {

    it('should return the inital state', () => {
        const action = 'unknown';
        const newState = serviceReducer(undefined, action);
        expect(newState).to.be.deep.equal(initState);
    });

    it('handle expected action', () => {
        let services =  [
            {
                "id": 1,
                "serviceName": "ncs1"
            }];

        const action = {
            type: types.GET_SERVICES,
            services
        };
        const newState = serviceReducer(initState, action);
        console.log(newState);
        expect(newState).to.be.deep.equal(services);
    });
});