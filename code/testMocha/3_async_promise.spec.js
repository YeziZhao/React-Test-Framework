// import "babel-polyfill";
import { expect } from 'chai';

var DB = {
    getUser: function ( object ) {
        return new Promise( function ( resolve, reject ) {
            let user = {name: 'yeziTesting',age: 28};
            resolve(user);
        } );
    }
};

//处理异步pormise两种方式：done，或直接返回promise
//注意两种方式不可同时使用，即返回了Promise就不要调用done，否则Mocha会报错。
describe( 'asyncPromise', function () {
       
    //处理promise,这种是使用done方式
        describe( 'asyncPromise_done', function () {
            //  保存成功后执行 Promise.then
            it( 'getUser without error.', function (done) {
                DB.getUser().then((user) => {
                    expect(user.name).to.equal('yeziTesting');
                    done();
                });
            } );
            it( 'getUser with error.', function (done) {
                DB.getUser().then((user) => {
                    expect(user.age).to.equal(28);
                    done();
                });
            } );
        } )

        //处理promise:在测试用例中直接返回处理结果（return）,与使用done函数是一个效果
        describe( 'async_promise_promise', function () {
            //  保存成功后执行 Promise.then
            it( 'getUser without error.', function () {
                return DB.getUser().then((user) => {
                    expect(user.name).to.equal('yeziTesting');
                });
            } );
            it( 'getUser with error.', function () {
                return DB.getUser().then((user) => {
                    expect(user.age).to.equal(28);
                });
            } );
        } )

    } );



