import configsProd from './configs.prod';
import configsDev from './configs.dev';
let configs = configsDev;
if (process.env.NODE_ENV === 'production') {
    configs = configsProd;
}
export default configs;