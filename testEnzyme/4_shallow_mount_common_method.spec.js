import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import TextareaComponent from './TextareaComponent_child';
import ChildTextareaComponent from './TextareaComponent_nochild';
import LifecycleComponent from './TextareaComponent_lifecycle';

const wrapper = mount(
    <ul id='parentId'>
        <li key='odd1' id='idChild'>odd1</li>
        <li key='even2' className='cssChild'>even2</li>
        <li key='odd3'>odd3</li>
        <li key='even4'>even4</li>
    </ul>
);

//对象查找，内容获取常用方法
describe('shallow_mount_( find, findWhere, filter, filterWhere， at， childAt， children, closest, is, not, exists, slice, contains, dedug, html, text, key, type)', () => {

    // find: 根据选择器匹配DOM节点:只能使用简单的选择器
    it('shallow_mount_find', () => {
        expect(wrapper.find('#idChild')).to.have.length(1); //id
        expect(wrapper.find('.cssChild')).to.have.length(1); //css
    });

    //findWhere: 找到所有渲染树下满足函数内判断的节点
    it('shallow_mount_findWhere', () => {
        expect(wrapper.findWhere( n =>  { return n.text() === 'odd1' || n.text() === 'odd3' }).length).to.be.equal(2);
    });

    //filter:过滤，从wrapper中筛选出与参数中的selector匹配的节点
    it('shallow_mount_filter', () => {
        expect(wrapper.find('#parentId').children().filter('.cssChild').length).to.be.equal(1);
    });

    //filterWhere: 过滤出所有渲染树下满足函数内判断的节点
    it('shallow_mount_filterWhere', () => {
        expect(wrapper.find('#parentId').children().filterWhere( n =>  { return n.text() === 'odd1' || n.text() === 'odd3' }).length).to.be.equal(2);
    });

    //at: 返回一个渲染过的对象 
    it('shallow_mount_at', () => {
        expect(wrapper.children().at(0).contains(<li id='idChild'>odd1</li>)).to.be.equal(true);
    });

    //childAt: 返回一个渲染过的当前wrapper的index索引处的子对象 
    it('shallow_mount_childAt', () => {
        expect(wrapper.childAt(1).contains(<li className='cssChild'>even2</li>)).to.be.equal(true);
    });

    //children: 返回一个渲染过的当前wrapper的所有子对象数组
    it('shallow_mount_children', () => {
        expect(wrapper.children().length).to.be.equal(4);
    });

    //closest: 通过遍历树中当前节点的祖先，从自身开始，返回与选择器匹配的第一个元素的wrapper。
    it('shallow_mount_closest', () => {
        expect(wrapper.find('.cssChild').closest('#parentId').length).to.be.equal(1);
    });

    //is: wrapper是否与selector匹配 
    it('shallow_mount_is', () => {
        expect(wrapper.is('#parentId')).to.be.equal(true);
    });

    //not: wrapper是否与selector不匹配  is() = !not()
    it('shallow_mount_not', () => {
        expect(wrapper.not('#notexist')).to.have.length(1);
    });

    //exists: 检测wrapper是否存在 
    it('shallow_mount_exists', () => {
        expect(wrapper.find('#parentId').exists()).to.be.equal(true);
    });

    //slice(begin,end): 删除节点 .左开又闭
    it('shallow_mount_slice', () => {
        expect(wrapper.find('#parentId').children().slice(1,3).first().text()).to.be.equal('even2');
        expect(wrapper.find('#parentId').children().slice(1,3).length).to.be.equal(2);
    });

    // contains: 当前对象是否包含“参数”中的node (react对象或react对象数组)
    // containsAllMatchingElements: 使用方法与contains相同，只接受数组做参数（不举例了）
    // matchesElement: 使用方法与contains相同，只接受单个做参数（不举例了）
    it('shallow_mount_contains', () => {
        expect(wrapper.contains(
            [
            <li id='idChild'>odd1</li>,
            <li className='cssChild'>even2</li>
        ])).to.be.equal(true);
        expect(wrapper.children().contains(<li>even2</li>)).to.be.equal(false);//元素需要完全相等
    });

    //debug(): 类似于 HTML 的字符串
    it('shallow_mount_debug', () => {
        console.log(wrapper.children().debug());
    });
    //html(): 返回当前渲染树的渲染HTML字符串,只能在单个节点上使用.html()
    it('shallow_mount_html', () => {
        // console.log(wrapper.children().html());//节点超过1个错误
        console.log(wrapper.html());
    });
    //text(): 返回节点的text值（value值）
    it('shallow_mount_text', () => {
        expect(wrapper.childAt(0).text()).to.be.equal('odd1');
    });
    //key(): 获取wrapper上的key属性
    it('shallow_mount_key', () => {
        expect(wrapper.childAt(1).key()).to.be.equal('even2');
    });
     //type(): 返回此wrapper的节点类型。 如果它是一个复合组件，这将是组件构造函数。 如果它是本地DOM节点，它将是一个标签名称的字符串。 如果它为null，它依然是null 
     it('shallow_mount_type', () => {
        expect(wrapper.type()).to.be.equal('ul');
        const wrapperConstr = mount(<TextareaComponent />);
        expect(wrapperConstr.type()).to.be.equal(TextareaComponent);
    });
});