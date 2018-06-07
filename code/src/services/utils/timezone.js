import moment from 'moment-timezone';

// Convert Time Zone to
export default function toTimeZone(time = moment(), zone = 'Asia/Seoul') {
    // let format = 'YYYY/MM/DD HH:mm:ss ZZ';
    // return moment(Date.parse(new Date(time), format)).tz(zone).format(format); 
    return moment(time).tz(zone);
}
// Example:
// moment(Date.parse(new Date(), format)).tz('Asia/Seoul').format(format);

// TimeZone List
// Seoul: Asia/Seoul
// Tokyo: Asia/Tokyo
// Shanghai: Asia/Shanghai
// Taipei: Asia/Taipei
// Paris: Europe/Paris