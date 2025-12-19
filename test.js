// for (let i = 0; i<5; i++) {
//     console.log(i);
// }

// let j = 0;

// while(j <7) {
//     console.log(j);
//     j++;
// }

// let k = 0;

// do{
//     console.log(k);;
//     k++
    
// } while(k < 1);


// let arr = [1,2,3,4]

// for (let val of arr){
//     console.log(val);
// }


const person = {
    name: 'jod',
    age: 30,
    passion: 'code'
};

// for (let key in person) {
//     console.log(person[key]);
    
// }


//for each replaces for in

// Object.values(person).forEach(value => {
//     console.log(value);
// })

// const arr = [1,2,3,4];



//for each replaces for of
// arr.forEach(function(item){
//     console.log(item);
    
// })



//annonymous function
// console.log(function (a,b) {
//     return a + b;
// }(2,3));




//how to use promise
// const myPromise = new Promise((res,rej) => {
//     const randomNum = Math.floor(Math.random() * 10);

//     if(randomNum < 5) {
//         res(`success! ${randomNum}`);
//     }
//     else{
//         rej(`failed! ${randomNum}`);
//     }
// },1000)

// myPromise.then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// })