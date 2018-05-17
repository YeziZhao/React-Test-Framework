import { expect } from 'chai';
import axios from 'axios';
require("babel-polyfill");


function asyncDoneMethod() {
    return axios.get('/mockjsdata/1/api/services');
}


// 如果未调用done函数，Mocha会一直等待直到超时。
// 如果未添加done参数，Mocha会直接返回成功，不会捕获到异步的断言失败。

describe('asyncDone',() => {

    // 没有done 回调函数，即使expect与actual不一致，也会pass
    it('no done callBack', () => {
        asyncDoneMethod().then((res) => {
        console.log('no done in');
        let result = res.data;
        expect(result.data.length).to.be.equal(6); //expect:6 actual:7
        });
        console.log('no done out');
    });

    
    it('have done callBack', (done) => {
            asyncDoneMethod().then((res) => {
            console.log('done in');
            let result = res.data;
            expect(result.data.length).to.be.equal(7);
            done();
        });
        console.log('done out');
    });
   
});

//study url: http://harttle.com/2016/07/12/async-test-with-chai-as-promised.html