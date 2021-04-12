// Array Callback Methods
 // forEach
 // map
 // filter
 // find
 //reduce
 // some
 // every

// forEach Accepts a callback function
// calls the function once per element in the array

const nums = [7,8,9,1,2,3,6,5,4];
nums.forEach(function(n){
    console.log(n*n);
});

//another way use forEach with functions
function triple(n){
    console.log(n*n*n)
}
nums.forEach(triple);


//map
    //creates a new array with the results of calling a callback on every element in the array

const text = ['Hello', 'What', 'who'];
const upper = text.map(function(n){
    return n.toUpperCase();
})

console.log(text);
console.log(upper);

// another way
 function makeLower(t){
    return t.toLowerCase();
}

const madeLowerCase= text.map(makeLower);
console.log(madeLowerCase);


// Arrow Functions
    // Another simple way of write function expression

    const square =(x) => {
        return x*x;
    }

    const sum = (x,y) => {
        return x+y;
    }

    // regular function 
    // const square = function(x){
    //    return x*x;
    // }

    // when only one parameter
    // const square = x => {
    //    return x*x;
    //   }
    console.log(square(6));
    console.log(sum(5,6));
    //when no parameters

    const greet = () =>{
        console.log('Hi!')
    }
    console.log(greet());

    // Arrow functions Implicit return

    const square2 = x => (
        x*x
    );
    console.log(square2(6));

        //one liner implicit return
    const square3 = x => x*x;
    console.log(square3(6));

// find 
        // find return the value of the first element in the array that satisfies the provided testinf function
        // this only return single value
    
let names = [
    'sunder rawat',
    'ravi rawat',
    'sunder singh',
    'bhavik'
]

let name = names.find(x => x.includes('rawat'));
console.log(name);


//filter
    // creates a new array with  all elements that pass the test implemented by the provided function
    // this show all posible results

const name2 = names.filter(x => x.includes('rawat'));
console.log(name2);

// every
    // tests whether all elements in the array pss the provided function. It returns a boolean value.
    
const nameChar = names.every(x => x.length >= 8)
console.log(nameChar);

// some
    // similar to every but returns true if any of the array elements pass the test function

    const nameChar2 = names.some(x => x.length >= 8)
    console.log(nameChar2);

// sort 
let number = [122,9,400,5050,87,99]
// console.log(number);
// console.log(number.sort())
// console.log(number);
// let comFunc = number.sort((a,b) => a-b);
// console.log(number);
// console.log(comFunc);
// let comFunc2 = number.sort((a,b) => b-a);
// console.log(comFunc);
// console.log(comFunc2);
// console.log(number);

console.log(number);
let badShort = number.slice().sort(); //slice make a copy of array

console.log(number);
console.log(badShort);

let ascOrder = number.slice().sort((a,b) => a-b);
let desOrder = number.slice().sort((a,b) => b-a);
console.log(ascOrder);
console.log(desOrder);
console.log(number);

//reduce
    // executes a reducer function on each element of the array resulting in a single value.
let arr = [87,7,5,99,145]
let sumArr = arr.reduce((x,y)=>x+y);
console.log(sumArr);
let sumArr2 = arr.reduce((x,y)=>{ return x+y},100); //initial value
console.log(sumArr2);
let maxVal = arr.reduce((x,y)=> Math.max(x,y));
console.log(maxVal)

