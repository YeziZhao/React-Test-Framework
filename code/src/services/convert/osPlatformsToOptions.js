import _ from 'lodash';
function osPlatformsToOptions(osPlatforms) {
    let rOSPlatforms = [];
    _.map(osPlatforms, (osPlatform, key) => {
        rOSPlatforms.push({
            text: osPlatform.osPlatformName,
            value: osPlatform.id
        });
    });
    return rOSPlatforms;
}
export default osPlatformsToOptions;