import { expect } from 'chai';
//对数据类型的实例
describe('expect(ok, true, false, null, unfefined, NAN, exist, empty)', () => {
    //ok会对数据进行类型转换，true，1 转换为ok
    it('#ok', () => {
        //不推荐
       expect(1).to.be.ok;
       expect(true).to.be.ok;
       expect(false).to.not.be.ok;
       expect(null).to.not.be.ok;
       expect(undefined).to.not.be.ok;
       //推荐
       expect(1).to.equal(1);
       expect(true).to.be.true;
       expect(false).to.be.false;
       expect(null).to.be.null;
       expect(undefined).to.be.undefined;
    });
    ////断言目标为true,不会对数据进行类型转换，只能为true才能通过断言
    it('#true', () => {
        expect(1).to.not.be.true;
        expect(true).to.be.true;
    })
    //断言目标为flase,不会对数据进行类型转换，只能为false才能通过断言
    it('#fasle',() => {
        expect(0).to.not.be.false;
        expect(false).to.be.false;
    });
    //断言目标为null,不会对数据进行类型转换，只能为null才能通过断言
    it('#null',() => {
        expect(null).to.be.null
        expect(undefined).to.not.be.null
    });
    //断言目标为undefined,不会对数据进行类型转换，只能为undefined才能通过断言
    it('#undefined',() => {
        expect(undefined).to.be.undefined
        expect(null).to.not.be.undefined
    });
    //断言目标为NaN,不会对数据进行类型转换，只能为NaN才能通过断言
    it('#NaN',() => {
        expect('str'/0).to.be.NaN
        expect(4).to.not.be.NaN
    });
    //exist断言目标存在，即非null也非undefined
    it('#exist',() => {
        let bar;
        expect('foo').to.exist
        expect(null).to.not.exist
        expect(bar).to.not.exist
    });
    //断言目标的长度为0。对于数组和字符串，它检查length属性，对于对象，它检查可枚举属性的数量
    it('#empty',() => {
        expect([]).to.be.empty
        expect('').to.be.empty
        expect({}).to.be.empty
    });
    //断言目标是一个参数对象arguments
    it('#arguments',() => {
        expect(arguments).to.be.arguments;
    });
});