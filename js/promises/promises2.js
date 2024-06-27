const loop = ()=>{
    return new Promise((res,rej)=>{
        var j =0;
        setTimeout(()=>{
        for(i=0;i<=10;i++){
           j++;
        }
        res(j);
        },4000)
        
    })
}

loop().then((y)=>{console.log('done promise...' + y )});

console.log('end');