import { expect } from 'chai';

//nested： 嵌套调用
describe('expect( nested)', () => {
    it('#nested_object', () => {
        expect({a: {b: {c: 2}}}).to.have.nested.property('a.b.c');
        expect({a: {b: {c: 2}}}).to.nested.deep.include({ 'a.b': {c:2} });//没有deep是false
    });
    it('#nested_array', () => {
        expect({a: {b: [1,2]}}).to.have.nested.property('a.b[1]');
        expect({a: {b: [1,2]}}).to.nested.include({'a.b[1]': 2});
    });
    
})

//any: 满足一个即正确
//all: 满足所有才正确
//any 与 keys进行配合使用
describe('expect(.any, all)', () => {
    it('#any', () => {
        expect({a: 1, b: 2}).to.have.any.keys('a','c'); //任意一个都为true
    })
    it('#all', () => {
        expect({a: 1, b: 2}).to.have.all.keys('a','b');//必须全部满足才为true
    });
})

// a/an ： 断言给出的目标的类型。元音用an
describe('expect(a/an)',() => {
    it('#a', () => {
        expect('string').to.be.a('string').that.not.is.empty;
        expect({a: 1,b:2}).to.be.an('object').that.include({a:1});
        expect(null).to.be.a('null');
        expect(undefined).to.be.an('undefined');
        expect(new Error).to.be.an('error');
        expect(Promise.resolve()).to.be.a('promise');
        expect(new Float32Array).to.be.a('float32array');
        expect(Symbol()).to.be.a('symbol').but.not.an('undifined');
        expect('foo').to.not.be.an('array');
    });
}) 

//include()和contains()即可作为属性类断言前缀语言链又可作为作为判断数组、字符串是否包含某值的断言使用。当作为语言链使用时
describe('expect(include, contains)', () => {
    it('#include', () => {
        expect([1,2,3]).to.be.an('array').that.include(2);
        expect(new Map([['a',1],['b',2]])).to.be.include(2);
        expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
        expect({a:{b: {c: 1}}}).to.be.nested.include({'a.b.c': 1});
        expect({b: 1,a:{b: {c: 1}}}).to.be.include.keys('b');
    });
    it('#contains', () => {
        expect([1,2,3]).to.be.an('array').that.contains(2);
        expect(new Map([['a',1],['b',2]])).to.be.contains(2);
        expect({ foo: 'bar', hello: 'universe' }).to.contains.keys('foo');
        expect({a:{b: {c: 1}}}).to.be.nested.contains({'a.b.c': 1});
        expect({b: 1,a:{b: {c: 1}}}).to.be.contains.keys('b');
    });
})


//equal :严格相等
//deep: 值比较，遍历值比较
//eql: 断言目标深度等于value，相当于deep.equal(value)的简写
describe('expect(equal,deep, eql)',() => {
    it('#equal', () => {
        expect('string').to.be.equal('string');
        expect({a: 1, b: 3}).to.not.be.equal({a: 1, b: 3});
    });
    it('#deep_equal', () => {
        expect('string').to.be.deep.equal('string');
        expect({a: 1, b: 3}).to.be.deep.equal({a: 1, b: 3});
    });
    it('#deep_eql', () => {
        expect('string').to.be.eql('string');
        expect({a: 1, b: 3}).to.be.eql({a: 1, b: 3});
    });
})

//above: 断言目标大于（超过）value
//least: 断言目标不小于（大于或等于）value
//below: 断言目标小于value
//most: 断言目标不大于（小于或等于）value
//within: 断言目标在[start, end] 范围内
//不推荐使用这几类,使用equal替代
describe('expect(above, least, below, most, within)',() => {
    it('#above', () => {
        expect(2).to.be.above(1);
        expect('foo').to.have.length.above(2);
        expect([1,2,3]).to.have.lengthOf(3);
    });
    it('#least', () => {
        expect(2).to.be.least(1);
        expect('foo').to.have.length.least(2);
        expect([1,2,3]).to.have.lengthOf(3);
    });
    it('#below', () => {
        expect('foo').to.have.length.below(4);
        expect([1, 2, 3]).to.have.length.below(4);
    });
    it('#most', () => {
        expect('foo').to.have.length.of.at.most(4);
        expect([1, 2, 3]).to.have.length.of.at.most(3);
    });
    it('#within', () => {
        expect('foo').to.have.length.within(2, 4)
        expect([1, 2, 3]).to.have.length.within(2, 4)
    })
})

//instanceof：断言目标是构造函数constructor的一个实例
//property: 断言目标是否拥有某个名为name的属性
//ownProperty: 断言目标拥有名为name的自有属性
//ownPropertyDescription: 断言目标的某个自有属性存在描述符对象，如果给定了descroptor描述符对象，则该属性的描述符对象必须与其相匹配
describe('expect( instanceof, property, ownProperty)', () => {
    class A {}
    it('#instanceof', () => {
       expect(new A()).to.be.an.instanceof(A);
       expect([1, 2, 3]).to.be.an.instanceof(Array)
    });
   
    it('#property', () => {

        expect({a: 1, b: 2}).to.have.property('a');    
        //与own,deep合并使用
        expect({a: {b: 2}}).to.have.own.deep.property('a',{b:2});    
        
        //嵌套属性使用Object
        let deepObj = {
            green: { tea: 'matcha' },
            teas: [ 'Chai', 'matcha', { tea: 'konacha' } ]
          };
        expect(deepObj).to.have.nested.property('green.tea', 'matcha');
        expect(deepObj).to.have.nested.property('teas[1]', 'matcha');
        expect(deepObj).to.have.nested.property('teas[2].tea', 'konacha');
        
        //嵌套属性使用array
        let arr = [
            [ 'chai', 'matcha', 'konacha' ],
            [ { tea: 'chai' },
              { tea: 'matcha' },
              { tea: 'konacha' }
            ]
          ];
        expect(arr).to.have.nested.property('[0][1]', 'matcha');
        expect(arr).to.have.nested.property('[1][2].tea', 'konacha');
    });
    
    it('#ownProperty', () => {
        expect('test').to.have.ownProperty('length');
    });
    
    it('#ownPropertyDescription', () => {
        expect('test').to.have.ownPropertyDescriptor('length');
        expect({a: 1}).to.have.ownPropertyDescriptor('a', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: 1,
          });
        // 将断言的主语改为了属性描述符对象
        expect('test').to.have.ownPropertyDescriptor('length').to.have.property('value');
    });
})

//length:  求长度，需要设置.have.length标记作为比较length属性值的前缀
//lengthOf: 断言目标的length属性为期望的值
//match: 断言目标匹配到一个正则表达式
//string: 断言目标字符串包含另一个字符串
//keys: 断言目标包含传入的属性名。与any，all，contains或者have前缀结合使用会影响测试结果：详细看实例
//members： 断言目标是set的超集，或前者与后者所有严格相等（===）。可以与include和contains合作，但只能操作数组.

//最好使用lengthOf替换length
describe('expect( length, lengthOf, match, string, keys, members)', () => {
    it('#length', () => {
       expect([1, 2, 3]).to.have.length.above(2); //expect([1, 2, 3].length).to.be.equal(3);
    });
    it('#lengthOf', () => {
        expect([1, 2, 3]).to.have.lengthOf(3);
        expect([1, 2, 3]).to.have.lengthOf.above(2);//不推荐
     });
    
    it('#lengthOf', () => {
        expect('foobar').to.match(/^foo/);
    });

    it('#string', () => {
        expect('foobar').to.have.string('bar');
    });
    it('#keys', () => {
        
        //当与any结合使用时，无论是使用have还是使用contains前缀，目标必须至少存在一个传入的属性名才能通过测试。注意，any或者all应当至少使用一个，否则默认为all.
        expect({ foo: 1, bar: 2, baz: 3 }).to.have.any.keys('foo', 'bar');
        expect({ foo: 1, bar: 2, baz: 3 }).to.contains.any.keys('foo', 'bar');

        //当结合all和contains使用时，目标对象必须至少拥有全部传入的属性名，但是它也可以拥有其它属性名
        expect({ foo: 1, bar: 2, baz: 3 }).to.contains.all.keys('foo', 'bar');
        
        // //当结合all和have使用时，目标对象必须且仅能拥有全部传入的属性名
        expect({ foo: 1, bar: 2, baz: 3 }).to.have.all.keys('foo', 'bar', 'baz');

        // 传入string
        expect({ foo: 1, bar: 2, baz: 3 }).to.have.any.keys('foo');
        // 传入Array
        expect({ foo: 1, bar: 2, baz: 3 }).to.have.all.keys(['foo', 'bar', 'baz']);
        // 传入Object
        expect({ foo: 1, bar: 2, baz: 3 }).to.have.any.keys({ bar: 2, foo: 1 });
    });
    it('#members', () => {
        expect([1,2,3]).to.have.include.members([2]);
        expect([{ id: 1 }]).to.deep.include.members([{ id: 1 }]);
    });
})