//demonstration of asynch through callback pyramid

let result

function f1(init, callback){
   result = init + 1;
   callback(result);
   console.log('hi1');
}

function f2(init, callback){
    result = init + 1;
    callback(result);
    setTimeout(()=>{console.log('hi2')},2000);
    
 }

 function f3(init, callback){
    result = init + 1;
    callback(result);
    console.log('hi3');
 }

 function doIt(init){
    f1(init,(result1)=>{
        f2(result1, (result2)=>{
            f3(result2, (result3)=>{
                console.log(result3);
            } )
        })
    })
 }

 doIt(0);

