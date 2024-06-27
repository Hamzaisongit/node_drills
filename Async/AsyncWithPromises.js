const {readFile, writeFile}= require('fs');

var first;
var second;





let read = (path)=>{
    return new Promise((res, rej)=>{
        readFile(path,'utf-8',(err,data1)=>{
            if(err){
                console.log(err);
                return;
            }
            setTimeout(()=>{ first = data1;
                console.log('done this');
                res(first);},2000);
            });
        })
    }

 const asyncRead = async ()=>{
    const r1 = await read('./fs1.txt');
    console.log(r1);
    const r2 = await read('./fs2.txt');
    console.log(r2);
}

asyncRead();

console.log('end'); 
    
    
    
// read('./fs1.txt').then((y) => console.log(y));
//     console.log('after 1st');
//     read('./fs2.txt').then((y) => console.log(y));
// console.log('end'); 


/* setTimeout(()=>{
    console.log(first);
    console.log(second);
},5000); */


//writeFile('./fs3.txt',`this is 1st ${first} 2nd ${second}`)


/* readFile('./fs2.txt','utf-8',(err,data2)=>{
    if(err){
        console.log(err);
        return;
    }
    second = data2;
    console.log('done 2nd');
}); */