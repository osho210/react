let a = 0;
console.log(a);


new Promise((resolve,reject)=>{
    setTimeout(() => {
        a = 1;
        resolve(a)
    }, 1000);
}).then((b)=>{
    console.log(b)
}).catch((c)=>{
    console.log("errをキャッチ",c)
})
