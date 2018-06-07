import { 
    combineReducers 
} from 'redux';
import services from './servicesReducer';
import applications from './applicationsReducer';
import latestVersionNumber from './latestVersionNumberReducer';
import osPlatforms from './osPlatformsReducer';
import version from './versionReducer';
import idcTypes from './idcTypesReducer';
import worksListQuery from './worksListQueryReducer';
import planList from './planListReducer';
import acceptorLevels from './acceptorLevelsReducer';
import messages from './messagesReducer';
import pageSizes from './pageSizesReducer';
const rootReducer = combineReducers({
    services,
    applications,
    latestVersionNumber,
    osPlatforms,
    version,
    idcTypes,
    worksListQuery,
    planList,
    acceptorLevels,
    messages,
    pageSizes
});
export default rootReducer;