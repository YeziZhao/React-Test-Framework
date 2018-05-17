function jsToFile(_jObj) {
    return new File([JSON.stringify(_jObj)], _jObj.name);
}
export default jsToFile;