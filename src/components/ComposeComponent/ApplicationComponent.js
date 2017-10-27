import React from 'react';
import PropTypes from 'prop-types';
import {
    SelectInput
} from '../common';
import { composeStyle } from '../../styles/compose';
import { currentCDNVersionStyle as cdnStyles } from '../../styles/currentCDNVersion';
import { appVersionHistoryStyle } from '../../styles/appVersionHistory'; 
import {
    MESSAGES as M,
    convert
} from '../../services';
const propTypes = {
    version: PropTypes.object.isRequired,
    applications: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleChangeApplication: PropTypes.func.isRequired
};
class ApplicationComponent extends React.Component {
    render() {
        let {
            version,
            applications,
            handleChangeApplication
        } = this.props;
        const defaultOption = {
            text: M.TEXT_PLEASE_SELECT,
            value: -1
        };
        applications = convert.applicationsToOptions(applications);
        return (
            <div className={composeStyle.program_container + ' ' + cdnStyles.program_container + ' ' + appVersionHistoryStyle.program_container}>
                <div className={composeStyle.lab_name}>{M.TEXT_PROGRAM}</div>
                <SelectInput
                    id="application"
                    name="application"
                    value={version.applicaionId}
                    defaultOption={defaultOption}
                    options={applications}
                    onChange={handleChangeApplication}
                />
            </div>
        );
    }
}
ApplicationComponent.propTypes = propTypes;
export default ApplicationComponent;