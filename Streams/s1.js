const {createReadStream} = require('fs');

const stream = createReadStream('./bigFile.txt',{encoding:'utf-8'});

stream.on('data',(result)=>{
    console.log(result);
})