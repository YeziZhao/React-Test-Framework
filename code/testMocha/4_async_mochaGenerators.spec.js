import { expect } from 'chai';
import axios from 'axios';
require("babel-polyfill");
require('mocha-generators').install();

function asyncGeneratorMethod() {
    return axios.get('/mockjsdata/1/api/services');
}
//使用mocha-generators进行异步测试
//第一个测试用例会打印1 2，第二个会打印 4 3
describe('asyncGenerator',() => {
    it('async response and yield', function * () {
        yield asyncGeneratorMethod().then((res) => {
            console.log('1');
            let result = res.data;
            expect(result.data.length).to.be.equal(7);
        });
        console.log('2');
    });
    it('async response', function * () {
        asyncGeneratorMethod().then((res) => {
            console.log('3');
            let result = res.data;
            expect(result.data.length).to.be.equal(7);
        });
        console.log('4');
    });
});