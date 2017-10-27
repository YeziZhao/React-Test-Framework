import React from 'react';
import PropTypes from 'prop-types';
import {
    SelectInput
} from '../common';
import { composeStyle as Styles } from '../../styles/compose';
import { currentCDNVersionStyle as cdnStyles } from '../../styles/currentCDNVersion';
import { appVersionHistoryStyle } from '../../styles/appVersionHistory';
import {
    MESSAGES as M,
    convert
} from '../../services';
const propTypes = {
    version: PropTypes.object.isRequired,
    services: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleChangeService: PropTypes.func.isRequired
};
class ServiceComponent extends React.Component {
    render() {
        let {
            version,
            services,
            handleChangeService
        } = this.props;
        const defaultOption = {
            text: M.TEXT_PLEASE_SELECT,
            value: -1
        };
        services = convert.servicesToOptions(services);
        return (
            <div className={cdnStyles.service_container + ' ' + Styles.service_container + ' ' + appVersionHistoryStyle.service_container}>
                <div className={Styles.lab_name}>{M.TEXT_SERVICE}</div>
                <SelectInput
                    id="service"
                    name="service"
                    value={version.serviceId}
                    defaultOption={defaultOption}
                    options={services}
                    onChange={handleChangeService}
                />
            </div>
        );
    }
}
ServiceComponent.propTypes = propTypes;
export default ServiceComponent;