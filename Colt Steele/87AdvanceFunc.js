// Advanced Functions
// Scope :> variable Visibility
// Function Scope

const bird ='Chidiya';
function BirdName(){
    const bird = 'Modi';  //this is function scope
    console.log(bird);
}
BirdName();
console.log(bird);

//Block Scope
// scope of variable only present in a block
if(true){
    let YourName = 'sunder';
    console.log(YourName); //sunder
}
// console.log(YourName); // YourName is not defined error

//Lexical Scope
//Nested functions in diffrent block in variable scope 

function Outer(){
    let hi ='hi';
    function Inner(){
        let hi ='Hello';
        console.log(hi.toUpperCase());
    }
    Inner();
}
Outer();

//Function Expression
//Another way of defining function
const square = function(num){   //anomonus function
    return num*num;
}
console.log(square(5));

const product = function multiply(x,y){
    return x*y;
}
console.log(product(4,5));


//using function as object

const obj1 = {
    doSomething : product,
    square2 : square
}
console.log(obj1.doSomething(4,6));
console.log(obj1.square2(6));

// functions as arguments
// use function in other function as arguments

console.log(product(square(7),square(8)));
console.log(square(product(32,56)));


// function as return value

const funcReturn= function() {
    return function(){
        return 'this is return function';
    }
}

const v2= funcReturn();
console.log(v2());

//callback function
// use function as an argument
  function h1(func){
      func();
  }

  function hello(){
      console.log('hello this from callback');
  }

  console.log(h1(hello));


  //Hoisting

  console.log(animal); // use variable before declare
  var animal = 'dog';





