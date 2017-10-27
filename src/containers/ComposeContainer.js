import React from 'react';
import PropTypes from 'prop-types';
import { 
    bindActionCreators 
} from 'redux';
import { 
    connect 
} from 'react-redux';
import ComposeComponent from '../components/ComposeComponent';
import * as deploymentSystemActions from '../actions/deploymentSystemACtions';
import { 
    composeStyle 
} from '../styles/compose';
import {
    utils
} from '../services';
const propTypes = {
    version: PropTypes.object.isRequired,
    services: PropTypes.arrayOf(PropTypes.object).isRequired,
    applications: PropTypes.arrayOf(PropTypes.object).isRequired,
    latestVersionNumber: PropTypes.string.isRequired,
    osPlatforms: PropTypes.arrayOf(PropTypes.object).isRequired,
    actions: PropTypes.object.isRequired,
};
class ComposeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeService = this.handleChangeService.bind(this);
        this.handleChangeApplication = this.handleChangeApplication.bind(this);
        this.handleChangeOSPlatform = this.handleChangeOSPlatform.bind(this);
        this.handleChangeAppVerNum = this.handleChangeAppVerNum.bind(this);
        this.handleChangeInstallFile = this.handleChangeInstallFile.bind(this);
        this.handleChangeVersionFile = this.handleChangeVersionFile.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleClickUpload = this.handleClickUpload.bind(this);
        this.props.actions.initCompose();
    }
    handleChangeService(e) {
        const serviceId = Number(e.target.value);
        this.props.actions.changeServiceId({
            serviceId
        });
    }
    handleChangeApplication(e) {
        const {
            serviceId
        } = this.props.version;
        const applicationId = Number(e.target.value);
        this.props.actions.changeApplicationId({
            serviceId,
            applicationId
        });
    }
    handleChangeOSPlatform(e) {
        const {
            serviceId,
            applicationId
        } = this.props.version;
        const osPlatformId = Number(e.target.value);
        this.props.actions.changeOSPlatformId({
            serviceId,
            applicationId,
            osPlatformId
        });
    }
    handleChangeAppVerNum(e) {
        const appVerNum = e.target.value;
        this.props.actions.changeAppVerNum({
            appVerNum
        });
    }
    handleChangeInstallFile(e) {
        const installFile = utils.fileToJs(e.target.files);
        if (!installFile) {
            e.preventDefault();
        }
        else {
            this.props.actions.changeInstallFile({
                installFile
            });
        }
    }
    handleChangeVersionFile(e) {
        const versionFile = utils.fileToJs(e.target.files);
        if (!versionFile) {
            e.preventDefault();
        }
        else {
            this.props.actions.changeVersionFile({
                versionFile
            });
        }
    }
    handleChangeDescription(e) {
        const description = e.target.value;
        this.props.actions.changeDescription({
            description
        });
    }
    handleClickUpload(e) {
        // TODO: Validation of File
        this.props.actions.createVersion(this.props.version);
    }
    render() {
        const {
            version,
            services,
            applications,
            osPlatforms,
            latestVersionNumber
        } = this.props;
        return (
            <ComposeComponent 
                version={version}
                services={services}
                applications={applications}
                osPlatforms={osPlatforms}
                latestVersionNumber={latestVersionNumber}
                handleChangeService={this.handleChangeService}
                handleChangeApplication={this.handleChangeApplication}
                handleChangeOSPlatform={this.handleChangeOSPlatform}
                handleChangeAppVerNum={this.handleChangeAppVerNum}
                handleChangeInstallFile={this.handleChangeInstallFile}
                handleChangeVersionFile={this.handleChangeVersionFile}
                handleChangeDescription={this.handleChangeDescription}
                handleClickUpload={this.handleClickUpload}
            />
        );
    }
}
ComposeContainer.propTypes = propTypes;
const mapStateToProps = (state) => {
    const {
        version,
        services,
        applications,
        latestVersionNumber,
        osPlatforms
    } = state;
    return {
        version,
        services,
        applications,
        latestVersionNumber,
        osPlatforms
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(deploymentSystemActions, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ComposeContainer);