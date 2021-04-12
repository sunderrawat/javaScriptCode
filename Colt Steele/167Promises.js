//A promise is an object representing the eventual completion or failure of an asynchronous operation

// const willGetYouADog = new Promise((resolve, reject) =>{
//    const rand = Math.random();
//    if(rand < 0.5){
//     resolve();
//    }else 
//     reject();
// });

// const willGetYouADog = new Promise((resolve, reject) =>{
//     const rand = Math.random();
//     setTimeout(()=>{
//         if(rand < 0.5){
//             resolve();
//            }else 
//             reject();
//     },3000) 
//  });

//when promise is resolve so then method is run
// willGetYouADog.then(() => {
//     console.log('Yay you get a dog');
// });

//when promise is rejected so catch method is run
// willGetYouADog.catch(()=>{
//     console.log(':( No Dog')
// })


//returning promise from functions

// const makeDogPromise = function(){
//     return new Promise((resolve, reject) =>{
//         const rand = Math.random();
//         setTimeout(()=>{
//             if(rand < 0.5){
//                 resolve();
//                }else 
//                 reject();
//         },3000) 
//      });
// }

// makeDogPromise()
// .then(() => {
//     console.log('Yay you get a dog');
// })
// .catch(()=>{
//     console.log(':( No Dog')
// })

//resolving and rejecting with values
// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(()=>{
//             if(rand < 0.5){
//                 resolve({status: 200});
//                }else 
//                 reject({status: 404});
//         },4000) 
//      });
// }

// fakeRequest()
// .then((res) => {
//     console.log('status: ',res.status)
//     console.log('Worked')
// })
// .catch((res) => {
//     console.log('status: ',res.status)
//     console.log('Denied')
// })


const btn = document.querySelector('button');
const moveX =  (element, amount, delay) => {
    return new Promise((resolve, reject) => {
        const bodyBoundary= document.body.clientWidth;
        const elRight = element.getBoundingClientRect().right;
        const currLeft = element.getBoundingClientRect().left;
    
        setTimeout(() => {
          if((elRight + amount) > bodyBoundary){
            reject();
          }
          else{
            element.style.transform = `translateX(${amount+currLeft}px)`
            resolve();
          }
        },delay); 
    })  
  };

//   moveX(btn,500,1000 )
//   .then(()=>{
//     moveX(btn,500,1000 )
//     .then(()=>{
//         moveX(btn,500,1000 )
//         .catch(()=>{
//             alert('can not move');
//         })
//     })
//     .catch(()=>{
//         alert('can not move')
//     })
//   })
//   .catch(()=>{
//       alert('can not move');
//   })

// moveX(btn, 100, 1000)
//  .then(()=> moveX(btn, 100, 1000))
//  .then(()=> moveX(btn, 100, 1000))
//  .then(()=> moveX(btn, 100, 1000))
//  .then(()=> moveX(btn, 100, 1000))
//  .then(()=> moveX(btn, 100, 1000))
//  .then(()=> moveX(btn, 100, 1000))
//  .then(()=> moveX(btn, 100, 1000))
//  .then(()=> moveX(btn, 100, 1000))
//  .then(()=> moveX(btn, 100, 1000))
//  .then(()=> moveX(btn, 100, 1000))
//  .then(()=> moveX(btn, 100, 1000))
//  .then(()=> moveX(btn, 100, 1000))
//  .then(()=> moveX(btn, 100, 1000))
//  .then(()=> moveX(btn, 100, 1000))
//  .catch(()=> console.log('Done out of space'))


 // use asyn and await in this 
 async function movingButton(el){
   await moveX(el, 100, 1000)
   await moveX(el, 100, 1000)
   await moveX(el, 100, 1000)
   await moveX(el, 100, 1000)
   await moveX(el, 100, 1000)
   await moveX(el, 100, 1000)
   await moveX(el, 100, 1000)
   await moveX(el, 100, 1000)
   await moveX(el, 100, 1000)
   await moveX(el, 100, 1000)
   await moveX(el, 100, 1000)
   await moveX(el, 100, 1000)
 }
 movingButton(btn)
 .catch(() => {
   console.log('All Done')
 })