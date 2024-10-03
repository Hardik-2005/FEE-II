// 1. getelementid: id selector
var a=document.getElementById("heading");
console.log(a);
console.dir(a);
a.style.color ="blue";
a.style.background ="red";
a.style.border ="2px solid black";
a.style.padding ="20px";



// 2. Class SElector :getelementbyclassname

var box = document.getElementsByClassName("Items");
console.log(box);
// box[0].style.backgroundColor = "green";
// box[2].style.backgroundColor = "green";


for(let list of box){
    list.style.color="blue";
    list.style.backgroundColor="red";
    list.style.fontweight="bold";
}



// 3. tagname selecor: getElementbytagname

var c = document.getElementsByTagName("h2");
c[0].style.backgroundColor = "green";
c[0].style.textDecoration = "line-through";


//queryselector:
// var d = document.querySelector("#work");

// console.log(d);
// d.style.color = "red";



// var d = document.querySelector("ul li a");

// console.log(d);
// d.style.color = "red";



var d = document.querySelector("li:nth.of.type(3)");

console.log(d);
d.style.color = "red";






