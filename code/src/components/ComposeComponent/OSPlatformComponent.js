import React from 'react';
import PropTypes from 'prop-types';
import {
    SelectInput
} from '../common';
import { composeStyle as Styles } from '../../styles/compose';
import {
    MESSAGES as M,
    convert
} from '../../services';
const propTypes = {
    version: PropTypes.object.isRequired,
    osPlatforms: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleChangeOSPlatform: PropTypes.func.isRequired
};
class OSPlatformComponent extends React.Component {
    render() {
        let {
            version,
            osPlatforms,
            handleChangeOSPlatform
        } = this.props;
        const defaultOption = {
            text: M.TEXT_PLEASE_SELECT,
            value: -1
        };
        osPlatforms = convert.osPlatformsToOptions(osPlatforms);
        return (
            <div className="os-container">
                <div className={Styles.lab_name}>{M.TEXT_OS}</div>
                <SelectInput
                    id="os"
                    name="os"
                    value={version.osPlatformId}
                    defaultOption={defaultOption}
                    options={osPlatforms}
                    onChange={handleChangeOSPlatform}
                />
            </div>
        );
    }
}
OSPlatformComponent.propTypes = propTypes;
export default OSPlatformComponent;