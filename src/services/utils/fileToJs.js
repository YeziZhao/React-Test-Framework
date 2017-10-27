const _fileProperties = [
    'lastModified',
    'lastModifiedDate',
    'name',
    'path',
    'preview',
    'size',
    'type',
    'webkitRelativePath'
];
function fileToJs(files) {
    if (!files || !files[0]) {
        return {};
    }
    const fileBlob = files[0];
    const newFile = {};

    _fileProperties.forEach(key => {
      newFile[key] = fileBlob[key];
    });

   return newFile;
}
export default fileToJs;
// Reference: https://stackoverflow.com/questions/40252955/how-to-only-dispatch-filelist-from-datatransfer-after-file-items-are-loaded/41228383#41228383