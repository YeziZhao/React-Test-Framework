import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

class Foo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        const { count , size } = this.state;
        const { handCustomMethod } = this.props;
        return (
            <div>
                <div className={`clicks-${count}`}>
                    {count} clicks
                </div>
                <a
                    onClick={() => {this.setState({ count: count + 1 });}}
                >
                    Increment
                </a>
            </div>
        );
    }

}

//simulate : 动作机制为将参数中的 ‘event’首字母大写后在前面加上’on’ 变为 ‘onEvent’, 然后检查props中是否有onEvent，并运行 
describe('shallow_mount_(simulate)', () => {
    const wrapper = mount(<Foo  count={0} size={0}/>,
        {
            context: "mount_context", 
            lifecycleExperimental: true, 
            disableLifecycleMethods: false
                });
    it('mount_simulate', () => {
        expect(wrapper.find('#clicks-0').length).to.equal(0);
        wrapper.find('a').simulate('click');
        expect(wrapper.find('.clicks-1').length).to.equal(1);
    });

    

});