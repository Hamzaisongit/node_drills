const http = require('http');

const server = http.createServer();

//http EXTENDS events so...

server.on('request', (req,res)=>{
    if(req.url == 'url1'){
        res.end(`<h1>ONE</h1>`);
    }else{
        res.end(`<h1>HOME</h1>`);
    }
});

server.listen(3000);