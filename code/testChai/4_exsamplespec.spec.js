import { expect } from 'chai';

describe('Expect(not, equal, include, members, property , keys)',() =>  {
    it('#not', () =>  {
        expect({a: 1}).to.not.have.property('b');
        expect([1,2]).to.be.an('array').that.does.not.include(3);
    });
    
    //设置deep标记，然后使用equal和property断言。该标记可以让其后的断言不是比较对象本身，而是递归比较对象的键值对
    it('#deep_object_equal', () =>  {
        expect({a: 1}).to.deep.equal({a: 1});//比较字段值 true
        expect({a: 1}).to.not.equal({a: 1}); //true
    });
    
    it('#deep_array_include', () =>  {
        expect([{a: 1},{b: 2}]).to.deep.include({a: 1});//键值对比较：相等
        expect([{a: 1},{b: 2}]).to.not.include({a: 1}); //{a: 1} 对象包含比较，不相等
    });
    it('#deep_object_include', () =>  {
        expect({x: {a: 1},b: 1}).to.deep.include({x: {a: 1}}); //比较的属性对象键值，相等
        expect({x: {a: 1}}).to.not.include({x: {a: 1}}); //x属性是对象，不相等
        expect({x: 1}).to.include({x:1});//x属性是值，相等
    });

    it('#deep_array_members', () =>  {
        //members ：必须全部相等
        expect([{x:1},{x1: 2}]).to.have.deep.members([{x:1},{x1: 2}]); //键值对：true
        expect([{x: {a: 1},b: 2 }]).to.not.have.members([{x: {a: 1},b: 2 }]); //对象比较
        //member与include ，contain合作，不必全相等
        expect([{x:1},{x1: 2}]).to.include.deep.members([{x:1}]); //键值对：true
        expect([{x:1},{x1: 2}]).to.contains.deep.members([{x:1}]); //键值对：true
    });

    it('#deep_object_property', () => {
        expect({a: 1, b: 2, c: {a: 2}}).to.have.deep.property('c', { a: 2});
        expect({a: 1, b: 2, c: {a: 2}}).to.not.have.property('c', { a: 2});
    });

    it('#deep_set_keys', () => {
        expect(new Set([{a: 1}],[{b: 1}])).to.have.deep.keys([{a: 1}]);
        expect(new Set([{a: 1}],[{b: 1}])).to.not.have.keys([{a: 1}]);
    });

})


