import en_US from './en_US';
import zh_CN from './zh_CN';
import ko_KR from './ko_KR';
import {
    getLanguage
} from '../utils';
function getMessage() {
    const dLang = 'ko_KR';
    const lang = getLanguage() || dLang;
    const messages = {
        ko_KR,
        en_US,
        zh_CN,
    };
    return messages[lang] || messages[dLang];
}
export default getMessage();