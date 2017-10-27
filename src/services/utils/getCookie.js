// Get a Cookie by Key
function getCookie(key) {
    let cookie = document.cookie;
    let i, x, y, ARRcookies = cookie.split(';');
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf('='));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf('=') + 1);
        x = x.replace(/^\s+|\s+$/g, '');
        if (x == key) {
            return unescape(y);
        }
    }
}
export default getCookie;