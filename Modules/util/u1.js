const util = require('util');
const {readFile, writeFile} = require('fs');

const read = util.promisify(readFile);
const write = util.promisify(writeFile);

const doIt = async ()=>{
    try{
    const r1 = await read('./fs1.txt','utf-8');
    console.log(r1);
    const r2 = await read('./fs2.txt','utf-8');
    console.log(r2);
}catch(err){
    console.log(err);
}
}

doIt();

console.log('end');

