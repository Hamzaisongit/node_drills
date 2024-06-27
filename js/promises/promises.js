const {readFile} = require('fs');

let val = 0;
console.log('start');

// better not considered now
// function delayRead(path){
//     let result;
//     setTimeout(()=>{readFile(path,'utf-8',(err,data)=>{
//         if(err){
//             result=err;
//         }else{
//             result=data;
//         }
//     })},2000);
//     return result; 
// } 

// let promise = new Promise((res,rej)=>{
//     res(delayRead('./promises1.txt'));
//     console.log('hi');
// })

let promise = new Promise((res,rej)=>{
   
    var arg = null;
    setTimeout(()=>{
     console.log('hi');
    //  arg = 'hello';
     res(arg);

     if(arg==null){
         rej('ERROR!');
     }
     
   }, 2000);
});

promise.then((y)=>console.log(y), (n)=>console.log(n));

console.log('next up...');