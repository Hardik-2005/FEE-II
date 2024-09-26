function printName(func , num){
    for(let i=1; i<=num ; i++){
        func();
    }
}
printName(20);

 let myName = function(){
    console.log("Hardik");

};
printName(myName,20);