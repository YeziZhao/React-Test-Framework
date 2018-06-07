import React from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import {
    InputAreaComponent,
    AddListComponent
} from '../components/ListAddComponent';
const propTypes = {
    title: PropTypes.string,
};

const defaultProps = {
    title: '',
};

class ListAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            datas: [],
            text: ''
        };
        this.addItem = this.addItem.bind(this);
        this.textChange = this.textChange.bind(this);
    }
    addItem(item) {
      
        let temp = fromJS(this.state.datas).toJS();
        temp.push(item);
        this.setState((preState,props) => ({
            datas: temp
        }));
    }
    textChange(e) {
        this.setState((preState,props) => ({
            text: e.target.value
        }));
    }
    render() {
        const { text } = this.state;
        return(
            <div>
                 <InputAreaComponent 
                    text={text}
                    textChange={this.textChange}
                    onSubmit={this.addItem}
                />
                 <AddListComponent />
            </div>
        );
    }
}
ListAdd.propTypes = propTypes;
ListAdd.defaultProps = defaultProps;
export default ListAdd;