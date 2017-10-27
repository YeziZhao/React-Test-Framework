import _ from 'lodash';
function servicesToOptions(services) {
    let rServices = [];
    _.map(services, (service, key) => {
        rServices.push({
            text: service.serviceName,
            value: service.id
        });
    });
    return rServices;
}
export default servicesToOptions;