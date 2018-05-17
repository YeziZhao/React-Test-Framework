import { expect } from 'chai';
class User {
    constructor() {
    }
    save(username) {
        this.name = username;
    }
    update(username) {
        this.name = username;
    }
    get() {
        return this.name;
    }
    delete() {
        this.name = '';
    }
    toString() {
        return this.name;
    }
}

//钩子方法可以用来设置启动前置条件，测试之后需要清除的数据等等
// 将钩子函数写在 describe()  方法以外，将会作用于所有的测试用例。比如 beforeEach()  方法，如果写在了 describe()  方法以外，将会在所有的测试用例执行前执行该方法。
describe('hooks', () => {
    let user = new User();
    before("before hooks",() => {
    // runs before all tests in this block
        user.save('saveUsername');
        //当钩子函数抛出异常，在控制台中会显示出描述信息，能够很快定位哪里出现问题
        //throw Error();
        console.log('create usesr:',user);
    });

    after("after hooks",() => {
    // runs after all tests in this block
    user.delete();
    console.log("delete user: "+user);
    });

    beforeEach('before Each hooks',() => {
    // runs before each test in this block
    user.update("updateUsername");
    console.log('beforeEach: '+user);
    });

    afterEach('after each hooks',() => {
    // runs after each test in this block
    console.log('afterEach');
    });
    
    it('testCase_1', () => {
        expect(user.get()).to.be.equal('updateUsername');
    });
   
    });

  

    //http://www.cnblogs.com/litecodes/p/mocha-101-hooks.html