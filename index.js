// // let promise=new Promise((resolve,reject)=>{
// //     console.log("I am a promise")
// //     reject("some error occured here");
// // })

// // Promise usage


// // const getData=()=>{
// //     return new Promise((resolve,reject)=>{
// //         console.log("I am a promise")
// //         // resolve("Success message");
// //         reject("Some error occured")
// // })
// // }

// // let returnPromise=getData()
// // returnPromise.then((res)=>{
// //     console.log("Printing success")
// // }).catch((err)=>{
// //     console.log("some error occutred somcatch blocj print hrerte")
// // })

// //----------------------


// //Promise channing

// // function asyncFun1(){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //             console.log("Interval complete 1")
// //             resolve("success1")
// //         },4000)
// //     })
// // }

// // function asyncFun2(){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //             console.log("Interval complete2")
// //             resolve("success2")
// //         },4000)
// //     })
// // }

// // function asyncFun3(){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //             console.log("Interval complet3")
// //             resolve("success3")
// //         },4000)
// //     })
// // }
// // console.log("Fetching Data 1")
// // let result1=asyncFun1();
// // result1.then((res)=>{
// //     console.log(res);
// //     console.log("Fetching data2")
// //     let p2=asyncFun2();
// //     p2.then((res)=>{
// //         console.log(res);
// //         console.log("Fetching data 3")
// //         let p3=asyncFun3();
// //         p3.then((res)=>{
// //             console.log(res)
// //         })
// //     }).catch((err)=>{
// //         console.log(err)
// //     })
// // }).catch((err)=>{
// //     console.log(err)
// // })

// // --------------------------------------------------------------


// //async-await

// // async function hello (){
// //     console.log("Hello world")
// // }
// // Function to convert currency
// async function convertCurrency(amount, fromCurrency, toCurrency) {
//     const apiKey = 'YOUR_API_KEY';  // Replace with your API key
//     const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

//     try {
//         // Fetch exchange rates from the API
//         const response = await fetch(apiUrl);
//         const data = await response.json();

//         if (data.result !== 'success') {
//             throw new Error('Failed to fetch exchange rates');
//         }

//         // Get the conversion rate
//         const rate = data.conversion_rates[toCurrency];
//         if (!rate) {
//             throw new Error(`Conversion rate for ${toCurrency} not available`);
//         }

//         // Convert the amount
//         const convertedAmount = amount * rate;
//         console.log(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
//         return convertedAmount.toFixed(2);

//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// }

// // Example usage
// convertCurrency(100, 'USD', 'EUR')
//     .then(convertedAmount => console.log(`Converted Amount: ${convertedAmount} EUR`))
//     .catch(error => console.error('Conversion error:', error));

