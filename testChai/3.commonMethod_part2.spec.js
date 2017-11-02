import { expect } from 'chai';




//oneOf: 断言目标值出现在list数组的某个顶层位置（直接子元素，严格相等）
//change: 断言目标方法会改变指定对象的指定属性
//increase: 断言目标方法会增加指定对象的属性
//decrease: 断言目标方法会减少指定对象的属性
//extensible: 断言目标对象是可扩展的（可以添加新的属性）
//frozen: 断言目标对象是冻结的（无法添加新的属性并且存在的属性不能被删除和修改）
describe('expect( members, oneOf, change, increase, decrease, extensible, frozen)', () => {
    
    it('#oneOf', () => {
        expect('c').to.be.oneOf(['a', 'b', 'c']);
        expect([3]).to.not.be.oneOf([1, 2, [3]]) //3不在第一层
    });
    it('#change', () => {
        let obj = { val: 10 }
        let fn = function () { obj.val += 3 }
        let noChangeFn = function () { return 'bar' + 'baz' }
        
        expect(fn).to.change(obj, 'val')
    });
    it('#increase', () => {
        let obj = { val: 10 }
        let fn = function () { obj.val = 15 }
        expect(fn).to.increase(obj, 'val')
    });
    it('#decrease', () => {
        let obj = { val: 10 }
        let fn = function () { obj.val = 5 }
        expect(fn).to.decrease(obj, 'val')
    });
    it('#extensible', () => {
        var nonExtensibleObject = Object.preventExtensions({})
        var sealedObject = Object.seal({})
        var frozenObject = Object.freeze({})
        
        expect({}).to.be.extensible
        expect(nonExtensibleObject).to.not.be.extensible
        expect(sealedObject).to.not.be.extensible
        expect(frozenObject).to.not.be.extensible
    });
    it('#frozen', () => {
        var frozenObject = Object.freeze({})
        
        expect(frozenObject).to.be.frozen
        expect({}).to.not.be.frozen
    });
    
})



//throw: 断言目标函数会抛出一个指定错误或错误类型（使用instanceOf计算），也可使用正则表达式或者字符串来检测错误消息
//respondTo： 断言目标类或对象会响应一个方法（存在这个方法）
//satisfy: 测试器，接受一个参数表示目标值，返回一个布尔值
//closeTo(expected, delta)： 断言目标数字等于expected，或在期望值的+/-delta范围内（expect：Number，期望值 。delta：Number，范围半径）
describe('expect( throw, respondTo, itself, satisfy, closeTo)', () => {
    it('#throw', () => {
        let error =  new TypeError('Illegal salmon!'); ;
        let badFn = function () { throw error};
        
        expect(badFn).to.throw();
        expect(badFn).to.throw(error);
        expect(badFn).to.throw('salmon');
        expect(badFn).to.throw(TypeError);
        expect(badFn).to.throw(TypeError,'salmon');//字符串是检测错误消息
        expect(badFn).to.throw(TypeError,/salmon/);//正则是检测错误消息
    });
    it('#respondTo', () => {
        class Cat{
            meow() {}
            hello() {}
        }
        expect(new Cat()).to.respondTo('meow');
        expect(new Cat()).to.respondTo('hello');
    });
    it('#itself', () => {
        function Foo () {}
        Foo.bar = function () {};
        Foo.prototype.baz = function () {};
        
        expect(Foo).itself.to.respondTo('bar');//自己身上存在该方法
        expect(Foo).itself.not.to.respondTo('baz');//自己身上不存在该方法
    });
    
    it('#satisfy', () => {
        expect(3).to.satisfy(function (num) { return num > 0 })
    });
    it('#closeTo', () => {
        expect(1.5).to.be.closeTo(1, 0.5)
    });
})