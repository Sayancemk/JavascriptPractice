// let promise=new Promise((resolve,reject)=>{
//     console.log("I am a promise")
//     reject("some error occured here");
// })

// Promise usage


// const getData=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise")
//         // resolve("Success message");
//         reject("Some error occured")
// })
// }

// let returnPromise=getData()
// returnPromise.then((res)=>{
//     console.log("Printing success")
// }).catch((err)=>{
//     console.log("some error occutred somcatch blocj print hrerte")
// })

//----------------------


//Promise channing

// function asyncFun1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Interval complete 1")
//             resolve("success1")
//         },4000)
//     })
// }

// function asyncFun2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Interval complete2")
//             resolve("success2")
//         },4000)
//     })
// }

// function asyncFun3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Interval complet3")
//             resolve("success3")
//         },4000)
//     })
// }
// console.log("Fetching Data 1")
// let result1=asyncFun1();
// result1.then((res)=>{
//     console.log(res);
//     console.log("Fetching data2")
//     let p2=asyncFun2();
//     p2.then((res)=>{
//         console.log(res);
//         console.log("Fetching data 3")
//         let p3=asyncFun3();
//         p3.then((res)=>{
//             console.log(res)
//         })
//     }).catch((err)=>{
//         console.log(err)
//     })
// }).catch((err)=>{
//     console.log(err)
// })

// --------------------------------------------------------------


//async-await

// async function hello (){
//     console.log("Hello world")
// }

