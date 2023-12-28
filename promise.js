// let complete=true;

// let prom=new Promise((passed,failed)=>{
//   if(complete){
//     passed("hello world");

//   }
//   else{
//        failed();

//   };
// });

// console.log(prom)// jawab araha promise fullfiled: hello world,,, agar khali dety toh wo bus promise fullfilled deta

//ab hum same work krengy lekin complete ko as a variable ki jagah as a function dety hain

// function prom(complete){   //function name is prom
//     return new Promise((resolve,reject)=>{   //promise banaya
//         if(complete){
//             resolve("successfull")
//         }
//         else{
//             reject("failed")
//         }

//     })
// }
// console.log(prom(true)) //yahan hum basically complete ki value true de rhy

//now we will make seperate functions for resolve and reject consditions

// function prom(complete) {
  
//   return new Promise((resolve, reject) => {
//     if (complete) {
//       resolve("i am successfull");
//     } else {
//       reject("i am failed");
//     }
//   });
// }
// let onsuccess = (result) => {console.log(result)};
// let onfail = (error) => {console.log(error)};


// //uper jo functions thy wo khud hi nh chalengy unko chalana ab, pehly hum prom function ko call krengy
// prom(true).then(onsuccess);    
// prom(true).catch(onfail);     

//user ko wait krwa k dekhana 


// function prom(complete) {
  
//     return new Promise((resolve, reject) => {
//      console.log("fetching data, please wait")
//      setTimeout(()=>{
//         if (complete) {
//             resolve("i am successfull");
//           } else {
//             reject("i am failed");
//           }
//      },3000)
//     });
//   }
//   let onsuccess = (result) => {console.log(result)};
//   let onfail = (error) => {console.log(error)};
  
  
//   //uper jo functions thy wo khud hi nh chalengy unko chalana ab, pehly hum prom function ko call krengy
//   prom(true).then(onsuccess);    
//   prom(true).catch(onfail);  //jawab main fetching data wali line 2 dafa print ho ri becoz idhr 2 dafa prom call ho ra


// //   hum 1 dafa call krny ka tareeka btaty
// prom(true).then(onsuccess).catch(onfail)
// prom(false).then(onsuccess).catch(onfail)


//ab hum seekhengy then and catch k ander hi coding krna 


function prom(){
return new Promise(()=>{})


}

let 