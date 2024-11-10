let url = "https://catfact.ninja/fact";



fetch(url)
.then((res)=>{

    console.log(res.json());
})

.catch(()=>{
    console.log("Error:",err);
})




// 2. 
fetch(url).then((res)=>{

    console.log(res);
}).catch(()=>{
    console.log("Error:",err);
})


////1.
// fetch tehcnically returns a promise 
// console.log(fetch(url));