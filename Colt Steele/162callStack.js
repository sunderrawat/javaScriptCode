//Asynchronous code, callbacks and promises
    //call stack
      // track the functions to which are run and who pause

      const multiply =(x,y) => x*y;
      const square =(x) => multiply(x,x);
      const isRightTriangle =(a,b,c) => square(a) +square(b) ===square(c);
      console.log('hello');
      isRightTriangle(3,4,5);
      console.log(isRightTriangle(3,4,5));

      //call stack with debugging with dev tool
        //dev tool > sources> pages> app.js

        //js is single threaded
        //run single thing at same time after completing this run another command
       
        // console.log('First run this');
        // alert('i am alter and pause all other code');
        // console.log('run after alert');

   //How Asynchronous Callbacks Actually Work
   //the browser does the work with the help of web api's and js call stack recognizes these web api functions
  console.log('I print first');
  setTimeout(()=>{
    console.log('I print after 3 seconds');
  },3000);
  console.log('I print second');

  //168 callback hell
  const btn =document.querySelector('button');

  // setTimeout(()=>{
  //   btn.style.transform = 'translateX(100px)';
  //   setTimeout(()=>{
  //     btn.style.transform = 'translateX(200px)';
  //     setTimeout(()=>{
  //       btn.style.transform = 'translateX(300px)';
  //       setTimeout(()=>{
  //         btn.style.transform = 'translateX(400px)';
  //       },1000)
  //     },1000)
  //   },1000)
  // },1000)
  
  // const moveX = (element, amount, delay) => {
  //   setTimeout(() => {
  //     element.style.transform = `translateX(${amount}px)`
  //   },delay);
  // };

  // moveX(btn, 100, 1000);
  // moveX(btn, 200, 2000);
  // moveX(btn, 300, 3000);
  // moveX(btn, 400, 4000);
  // moveX(btn, 500, 5000);

  // const moveX = (element, amount, delay, callback) => {
  //   const bodyBoundary= document.body.clientWidth;
  //   const elRight = element.getBoundingClientRect().right;
  //   const currLeft = element.getBoundingClientRect().left;

  //   if((elRight + amount) > bodyBoundary){
  //     console.log('Done can not Move');
  //   }

  //   else{
  //     setTimeout(() => {
  //       element.style.transform = `translateX(${amount+currLeft}px)`
  //       console.log('moving button')
  //       if(callback) callback();
  //     },delay);
  //   }

  // };

  //massive callback
  // moveX(btn, 100, 1000, () => {
  //   moveX(btn, 200, 1000, () =>{
  //     moveX(btn, 300, 1000, () => {
  //       moveX(btn, 400, 1000, () =>{
  //         moveX(btn, 500, 1000, ()=>{
  //           moveX(btn, 600, 1000)
  //         });
  //       });
  //     });
  //   });
  // });

  const moveX = (element, amount, delay, onSucess, onFailure) => {
    const bodyBoundary= document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const currLeft = element.getBoundingClientRect().left;

    setTimeout(() => {
      if((elRight + amount) > bodyBoundary){
        onFailure();
      }
      else{
        element.style.transform = `translateX(${amount+currLeft}px)`
        onSucess();
      }
    },delay); 
  };

  moveX(btn, 300, 1000, () =>{
    //onSucess
    moveX(btn, 300, 1000, () =>{
      //onSucess
      moveX(btn, 300, 1000, () =>{
        //onSucess
        moveX(btn, 300, 1000, ()=>{
          //onSucess
          moveX(btn, 300, 1000, () => {
            //onSucess
            moveX(btn, 300, 1000);
          }, () => {
            alert('can not move 1500')
          })
        }, ()=>{
          alert('can not move 1200')
        })
      }, () => {
        //onFailure
        alert('can not move 900');
      })
    }, () =>{
      //onFailure
      alert('can not move 600')
    })
  }, () => {
    //onFailure
    alert('can not move 300');
  })