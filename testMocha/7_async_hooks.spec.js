import { expect } from 'chai';
import axios from 'axios';
require("babel-polyfill");
require('mocha-generators').install();

function asyncMethod() {
    return axios.get('/mockjsdata/1/api/services');
}

// 异步钩子：这里使用了mocha-generators,实际上done,async-wait，promise方式都应该适用
describe('async hooks', () => {
    let result = null;
    before("before hooks", function * () {
        
        yield asyncMethod().then((res) => {
            result = res.data;
        });
    });

    
    it('testCase_1', () => {
        console.log(result);
        expect(result.data.length).to.be.equal(7);
    });
   
    });

  
