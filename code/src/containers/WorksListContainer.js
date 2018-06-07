import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { 
    bindActionCreators 
} from 'redux';
import { 
    connect 
} from 'react-redux';
import {
    HeaderComponent,
    QueryComponent,
    ListComponent
} from '../components/WorksListComponent';
import * as worksActions from '../actions/worksActions';

const propTypes = {
    worksListQuery: PropTypes.object.isRequired,
    idcTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
    actions: PropTypes.object.isRequired,
    planList: PropTypes.arrayOf(PropTypes.object).isRequired,
    acceptorLevels: PropTypes.arrayOf(PropTypes.object).isRequired,
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageSizes: PropTypes.arrayOf(PropTypes.object).isRequired
};
class WorksList extends React.Component {
    constructor(props) {
        super(props);
        this.handChangeIdcType = this.handChangeIdcType.bind(this);
        this.handChangeProductType = this.handChangeProductType.bind(this);
        this.handChangeAcceptorLevel = this.handChangeAcceptorLevel.bind(this);
        this.handChangeStartDate = this.handChangeStartDate.bind(this);
        this.handChangeEndDate = this.handChangeEndDate.bind(this);
        this.search = this.search.bind(this);
        this.handChangePageSize = this.handChangePageSize.bind(this);
    }
    componentDidMount() {  
        const {
            actions,
            worksListQuery
        } = this.props;
        actions.getPlainList(worksListQuery.idcType);
        actions.getMessages(worksListQuery);
    } 
    handChangeIdcType(e) {
        const { actions } =  this.props;
        actions.changeIdcType(e.target.value);
    }
    handChangeProductType(e) {
        const { actions } =  this.props;
        actions.changeProductType(e.target.value);
    } 
    handChangeAcceptorLevel(e) {
        const { actions } = this.props;
        actions.changeAcceptorLevel(e.target.value);
    }
    handChangeStartDate(startDate) {
        const { actions } = this.props;
        actions.changeStartDate(startDate);
    }
    handChangeEndDate(endDate) {
        const { actions } = this.props;
        actions.changeEndDate(endDate);
    }
    search() {
        const { actions , worksListQuery } = this.props;
        actions.getMessages(worksListQuery);
    }
    handChangePageSize(e) {
        const { actions } = this.props;
        actions.changePageSize(e.target.value);
    }
    render() {
        const { 
            worksListQuery,
            idcTypes,
            planList,
            acceptorLevels,
            messages,
            pageSizes
            } = this.props;
        return (
            <div>
                <HeaderComponent />
                <QueryComponent 
                    worksListQuery={worksListQuery}
                    idcTypes={idcTypes}
                    handChangeIdcType={this.handChangeIdcType}
                    planList={planList}
                    handChangeProductType={this.handChangeProductType}
                    acceptorLevels={acceptorLevels}
                    handChangeAcceptorLevel={this.handChangeAcceptorLevel}
                    handChangeStartDate={this.handChangeStartDate}
                    handChangeEndDate={this.handChangeEndDate}
                    search={this.search}
                />
                <ListComponent 
                    totalCount={worksListQuery.totalCount}
                    pageSize={worksListQuery.pageSize}
                    pageSizes={pageSizes}
                    handChangePageSize={this.handChangePageSize}
                    messages={messages}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { 
        worksListQuery,
        idcTypes,
        planList,
        acceptorLevels,
        messages,
        pageSizes
    } = state;
    return { 
        worksListQuery,
        idcTypes,
        planList,
        acceptorLevels,
        messages,
        pageSizes
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(worksActions, dispatch)
    };
};

WorksList.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(WorksList);