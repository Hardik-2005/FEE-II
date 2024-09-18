// // // OBJECTS ARE DECLARED BY 2 METHODS CONSTRUCTOR / LITERALS
// // // OBJECTS ARE NAMED BY USING NEW IN WITH IT , IF NEW IS NOT WRITTEN THEN IT IS CONSIDERED AS A FUNCTION 
// // // THEY ARE ALWAYS SPECIFIES IN A (KEY,VALUE) PAIR

// // // A) CONSTRUCTOR:

// // const obj = new Object();
// // obj.name = 'Hardik'
// // obj.age = '19'
// // console.log(typeof obj)
// // console.log(obj)



// // // // b) Literals
// // const user = {
// //     name: 'Hardik',
// //     'roll number': 2310990680,
// //     subject : 'FEE'
// // }

// // // accessing object value 

// // // for full objbect print
// // console.log(user)   
// // console.log(user.name)  
// // // for one keyword print
// // console.log(user['name'])  

// // // chlega nhiii
// // console.log(user('roll number'))   
// // // chlta hai square brackets lga ke
// // console.log(user['roll number'])  

// // console.log(user['subject'])


// // //change object value   hardik ko replace kr diya
// // user.name='Naman';
// // console.log(user.name)


// //array inside an array 

// // let arr = [1,2,[1,2,3,4],34]
// // console.log(arr[2][2])


// //object inside an array

// let users={
//     user1:{
//         name:'jatin',
//         age: 24
//     },
//     user2:{
//         name:'nigga',
//         age: 20
//     }
// }
// console.log(users.user2.age)


// let user={
//     user1:{
//         name:'Hardik',
//         age: 19,
//         birthday:{
//             date: '3 August',
//             month : 'August',
//             year : '2005',
//         }
//     },
//     user2:{
//         name:'nigga',
//         age: 19,
//         birthday:{
//             date: '14 August',
//             month : 'August',
//             year : '2005',
//         }
        

//     }
// }
// console.log(user.user2.birthday.month) 




// //object inside an array

// let arr = [
//     {
//         name : ' Hardik'
//     },
//     {
//         name : 'Naman',
//         roll_number : 17
//     },
//     {
//         name : 'Jatin',
//         roll_number : 123
//     }
// ]
// console.log(arr[2].name)

   
// merge object

obj1 = { name1: 'Hardik', age:24}
obj2 = { name2: 'nigga', age:23} //if the keys are same then the values are overwritten by 2nd like age 24 and 23 which will print 23
// obj3 = {...obj1,...obj2} // ... 3 dot operator called spread operator
// console.log(obj3);
obj4 = Object .assign(obj1,obj2);
console.log(obj4) 




