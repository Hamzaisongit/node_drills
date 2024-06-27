const e = require('events');

const myEvent = new e();

//cutom evnt emission

myEvent.on('response',(v1,v2)=>{
    console.log(`${v1} and ${v2}`);
});

//u can create multiple event listners

//order matters !

myEvent.emit('response', 1, 12);

console.log('end');