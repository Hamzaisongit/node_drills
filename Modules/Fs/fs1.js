const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./fs1.txt','utf-8');
const second = readFileSync('./fs2.txt','utf-8');

writeFileSync('./fs3.txt',`hey there here is first : ${first}, second: ${second} `,{flag:'a'});
