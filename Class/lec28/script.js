// 1. simple function
function first(){
    console.log("This is a first function");
}

function second(call){
    console.log("This is a second function");
    call();
}

// function calling
// first();
// second();

// 2. function callback
second(first);

// 3. synchronous:

console.log("Stated");

function myFunc(){
    console.log("My Function Working");
}
myFunc();
console.log("Ends");


// js is a Asynchronous: lang but it works in a synchronous way  
// web APIs help JS to run in an Asynchronous: way



//4.setTimeout
         // 1, callback function , 2. delay 

console.log("Image Searching");
setTimeout(()  => {
  console.log("Image Rendered");
},2000);
console.log("Work Done");


// 5. setInterval: 
let count = 0;
let a = setInterval(() => {
    count++;
    console.log(`Message ${count}: Ghar ke neeche aaja geedi chaliye`  );
    if (count >= 3){
        clearInterval(a);
        console.log("Execution stopped");
    }
});
console.log("Work done");