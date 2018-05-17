import _ from 'lodash';
function applicationsToOptions(applications) {
    let rApplications = [];
    _.map(applications, (application, key) => {
        rApplications.push({
            text: application.applicationName,
            value: application.id
        });
    });
    return rApplications;
}
export default applicationsToOptions;