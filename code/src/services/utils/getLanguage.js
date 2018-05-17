import getCookie from './getCookie';
function getLanguage() {
    // return 'ko_KR';
    const language = getCookie('wm_deploy_language');// || 'en_US';
    return language;
}
export default getLanguage;