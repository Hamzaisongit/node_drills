const {readFile, writeFile} = require('fs');

//Asynchronus allowance in Node illustration

console.log('start process 1');

readFile('./fs1.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
        const first = result;
        readFile('./fs2.txt','utf-8',(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
                const second = result; 
                writeFile('./fsAsync.txt',`hey all this is 1st: ${first} 2nd: ${second}`,(err,result)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    console.log('end process 1');
                });    
        });
    });

    console.log('next process');