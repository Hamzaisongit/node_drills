const http = require('http');
const {readFileSync} = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url==='/cont'){
        res.write('this is contact');
        res.end();
    }else if(req.url==='/abt'){
        res.write('this is history');
        res.end();
    }else{
    res.end(`
    <h1> whooooopsssss </h1>
    <p>This is a para btw </p>
    <a href="/cont">contact</a>`); 
    }

 
});

server.listen(5000);

/*

setTimeout(()=>{
    process.exit()
},10000);

*/