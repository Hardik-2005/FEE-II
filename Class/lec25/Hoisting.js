// let and const: referenceError"
console.log(a);
let a = 10;


function myfunc(){
    var b=20;
    console.log(b);
}
//console.log(b); // ERROR

myfunc();

// var : undefined:
// console.log(a);
// var a =10;
// function myfunc(){
//     var b=20;
//     console.log(b);
// }
// //console.log(b); // ERROR

// myfunc();