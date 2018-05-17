import { 
    combineReducers 
} from 'redux';
import services from './servicesReducer';
import applications from './applicationsReducer';
import latestVersionNumber from './latestVersionNumberReducer';
import osPlatforms from './osPlatformsReducer';
import version from './versionReducer';
const rootReducer = combineReducers({
    services,
    applications,
    latestVersionNumber,
    osPlatforms,
    version
});
export default rootReducer;