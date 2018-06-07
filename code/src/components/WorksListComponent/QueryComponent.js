import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { 
    MESSAGES as M,
    convert
 } from '../../services';
import { ListStyle as Style } from '../../styles/list';
import {
    SelectInput
} from '../common';


const propTypes = {
    worksListQuery: PropTypes.object.isRequired,
    idcTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
    handChangeIdcType: PropTypes.func.isRequired,
    planList: PropTypes.arrayOf(PropTypes.object).isRequired,
    handChangeProductType: PropTypes.func.isRequired,
    acceptorLevels: PropTypes.arrayOf(PropTypes.object).isRequired,
    handChangeAcceptorLevel: PropTypes.func.isRequired,
    handChangeStartDate: PropTypes.func.isRequired,
    handChangeEndDate: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired
};

const Query = ({ 
    worksListQuery, 
    idcTypes, 
    handChangeIdcType,
    planList,
    handChangeProductType,
    acceptorLevels,
    handChangeAcceptorLevel,
    handChangeStartDate,
    handChangeEndDate,
    search
 }) => {
    const defaultOption = {
        text: M.LIST_FILTER_PRODUCT,
        value: ''
    }; 
    const tempPlanList = convert.planListToOption(planList);
    const {
        idcType,
        productType,
        acceptorLevelStr,
        startDate,
        endDate
    } = worksListQuery;
    return (
       <form className={Style.queryTab}>
            <SelectInput
                id="idcType"
                name="idcType"
                value={idcType}
                options={idcTypes}
                onChange={handChangeIdcType}
            />
            <SelectInput
                id="productType"
                name="productType"
                value={productType}
                defaultOption={defaultOption}
                options={tempPlanList}
                onChange={handChangeProductType}
            />
            <SelectInput
                id="acceptLevel"
                name="acceptorLevelStr"
                value={acceptorLevelStr}
                options={acceptorLevels}
                onChange={handChangeAcceptorLevel}
            />
            
           <DatePicker 
                id="worksBeginTime"
                selected={startDate}
                locale={M.LOCALE}
                todayButton={'Today'}
                dateFormat="YYYY/MM/DD"
                showYearDropdown
                showMonthDropdown
                onChange={handChangeStartDate}
                /> 
            <span> ~ </span> 
            <DatePicker 
                selected={endDate}
                locale={M.LOCALE}
                todayButton={'Today'}
                dateFormat="YYYY/MM/DD"
                showYearDropdown
                showMonthDropdown
                onChange={handChangeEndDate}
                />
            <a href="#" className={Style.submit} onClick={search}>{M.LIST_SEARCH}</a>
       </form>
    );
};
Query.propTypes = propTypes;
export default Query;