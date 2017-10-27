import { expect } from 'chai';
import axios from 'axios';

function asyncAwaitMethod() {
    return axios.get('/mockjsdata/1/api/services');
}
// 使用async与await进行异步测试
describe('asyncAwait',() => {
    it('async response and yield', async() => {
        await asyncAwaitMethod().then((res) => {
            console.log('1');
            let result = res.data;
            expect(result.data.length).to.be.equal(7);
        });
        console.log('2');
    });

    //下面这个同理，没有使用异步解决办法，不敢怎样都是pass
    it('async response', () => {
        asyncAwaitMethod().then((res) => {
            console.log('3');
            let result = res.data;
            expect(result.data.length).to.be.equal(6);
        });
        console.log('4');
    });
});