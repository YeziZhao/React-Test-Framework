import { expect } from 'chai';
import * as deployementAction from '../../src/actions/deploymentSystemActions';
import * as types from '../../src/actions/actionTypes';

describe('getServicesSuccess', () => {
    it('should be called, and right action was returned', () => {
        const services = [
            {
                "value": "one app win",
                "id": 1
            },
            {
                "value": "one app mac",
                "id": 2
            },
            {
                "value": "one app webtalk",
                "id": 3
            },
            {
                "value": "one app screenshare",
                "id": 4
            },
            {
                "value": "one app office driver win",
                "id": 5
            },
            {
                "value": "one app office driver mac",
                "id": 6
            },
            {
                "value": "web service",
                "id": 7
            }
        ];
        const action = deployementAction.getServicesSuccess(services);
        expect(action).to.be.deep.equal({
            type:types.GET_SERVICES,
            services
        });
    });
});

describe('getServices', () => {
    it('should be called, and right action was returned', () => {
        deployementAction.getServices();
    });
});