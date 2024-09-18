let str = 'Hardik';
let obj = { name: "Hardik"};

for(let i of str){
    let iterator = str[Symbol.iterator]();
    console.log(iterator);
    // console.log(str);
    console.log(iterator.next());
}
