import React from 'react';
import PropTypes from 'prop-types';
import { composeStyle as Styles } from '../../styles/compose';
import {
    MESSAGES as M
} from '../../services';
import {
    TextInput
} from '../common';
import ServiceComponent from './ServiceComponent';
import ApplicationComponent from './ApplicationComponent';
import OSPlatformComponent from './OSPlatformComponent';
const propTypes = {
    version: PropTypes.object.isRequired,
    services: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleChangeService: PropTypes.func.isRequired,

    applications: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleChangeApplication: PropTypes.func.isRequired,

    osPlatforms: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleChangeOSPlatform: PropTypes.func.isRequired,

    latestVersionNumber: PropTypes.string.isRequired,
    handleChangeAppVerNum: PropTypes.func.isRequired,

    handleChangeInstallFile: PropTypes.func.isRequired,
    handleChangeVersionFile: PropTypes.func.isRequired,

    handleChangeDescription: PropTypes.func.isRequired,

    handleClickUpload: PropTypes.func.isRequired
};
class ComposeComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            version,
            services,
            handleChangeService,

            applications,
            handleChangeApplication,

            osPlatforms,
            handleChangeOSPlatform,

            latestVersionNumber,
            handleChangeAppVerNum,

            handleChangeInstallFile,
            handleChangeVersionFile,

            handleChangeDescription,

            handleClickUpload
        } = this.props;
        return (
            <div className={Styles.container} >
                <h1 className={Styles.title}>{M.TEXT_NEW_VERSION_UPLOAD}</h1>
                <div className={Styles.content}>
                    <ServiceComponent
                        version={version}
                        services={services}
                        handleChangeService={handleChangeService}
                    />
                    <ApplicationComponent
                        version={version}
                        applications={applications}
                        handleChangeApplication={handleChangeApplication}
                    />
                    <OSPlatformComponent
                        version={version}
                        osPlatforms={osPlatforms}
                        handleChangeOSPlatform={handleChangeOSPlatform}
                    />
                    <div className={Styles.version_container}>
                        <div className={Styles.lab_name}>{M.TEXT_VERSION}</div>
                        <TextInput
                            value={version.appVerNum}
                            onChange={handleChangeAppVerNum}
                            placeholder={M.TEXT_PLEASE_INPUT_VERSION_NUMBER}
                        />
                        <div className={Styles.lab_notice}>
                            {
                                latestVersionNumber ?
                                <span className={Styles.appNum}>
                                    ({M.TEXT_LATEST_VERSION_NUMBER} : {latestVersionNumber})
                                </span> :
                                null
                            }
                            <div>
                                {M.TEXT_VERSION_NOTICE}
                            </div>
                        </div>
                        <div>
                            <div className={Styles.lab_name}>{M.TEXT_INSTALL_FILE}</div>
                            <input 
                                type="file"
                                className={Styles.file}
                                name="installFile"
                                onChange={handleChangeInstallFile}
                            />
                            <div className={Styles.lab_notice}>
                                {version.osPlatformId === 1 ? M.ALERT_INSTALL_FILE_SUFFIX_PKG : 
                                (version.osPlatformId === 2 ? M.ALERT_INSTALL_FILE_SUFFIX_EXE :
                                null)}
                            </div>
                        </div>
                        <div>
                            <div className={Styles.lab_name}>{M.TEXT_META_FILE}</div>
                            <input 
                                type="file"
                                className={Styles.file}
                                name="versionFile"
                                onChange={handleChangeVersionFile}
                            />
                            <div className={Styles.lab_notice}>
                                {version.osPlatformId === 1 ? M.ALERT_VERSION_FILE_SUFFIX_PLIST :
                                (version.osPlatformId === 2 ? M.ALERT_VERSION_FILE_SUFFIX_XML :
                                null)}
                            </div>
                        </div>
                        <div>
                            <div className={Styles.lab_name}>{M.TEXT_DESCRIPTION}</div>
                            <textarea 
                                className={Styles.description} 
                                cols="50"
                                rows="5"
                                onChange={handleChangeDescription}
                                value={version.description}
                                placeholder={M.TEXT_PLEASE_INPUT_DESCRIPTION}
                            >
                            </textarea>
                        </div>
                        <div className={Styles.nav}>
                            <button onClick={handleClickUpload}>
                                {M.TEXT_UPLOAD}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
ComposeComponent.propTypes = propTypes;
export default ComposeComponent;