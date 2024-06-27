const http = require('http');
const {readFileSync, createReadStream, } = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url==='/cont'){
        // const txt = readFileSync('.bigFile.txt','utf-8');
        const str = createReadStream('./bigFile.txt','utf8');
        str.on('open',()=>{
           str.pipe(res); 
        });
        str.on('error',(err)=>{
            res.end(err);
        })
        
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