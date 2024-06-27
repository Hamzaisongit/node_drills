const path = require('path');

const sep = path.sep;

console.log(sep);

const pathJoined = path.join('c:','users','91769','documents','website');

console.log(pathJoined);
console.log(path.basename(pathJoined));
console.log(path.resolve(__dirname, 'path.js'));
console.log(__dirname);