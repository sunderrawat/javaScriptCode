// Array is a collection of data any type

// creating an array
// let arrayName = [data]

//empty array
let emptyArray =[];
console.log(emptyArray);

// string array
let strArray=['hello','hey','ram-ram']
console.log(strArray)

//number array
let numArray=[1,3,5,10,189,1000,9]
console.log(numArray)

// mix array means all type of data in single array
let mixArray = ['name', 34, true, undefined, null]
console.log(mixArray)

// Array Indices
// know the data in array with the help of array index number  arrayName[indexNumber]

let colors = ['red', 'blue', 'green', 'yellow']
console.log(colors)
console.log(colors.length)   //find total length of an array
console.log(colors[0])  // find at index 0
console.log(colors[3])
console.log(console[5])     //undefind when out of length

// Modifying array 
// you can change array

console.log(colors[3]='white');
console.log(colors)

// Also adds data in array from .length
colors[colors.length] ='black'
console.log(colors)

// Array Methods 
// push and pop
// push :- add to the end of array and return total length
console.log('\n-----------Array Methods------------');
console.log('--------push---------');
console.log(colors.push('orange'))
console.log(colors)

// pop :- remove from end and return pop item
console.log('\n---------------pop-----------');
console.log(colors.pop());
console.log(colors.pop());
console.log(colors)

//shift:- remove from start and return removed element
console.log('\n-----------shift---------')
console.log(colors.shift())
console.log(colors)

//unshift:- add to start in array and return length of array
console.log('\n---------unshift----------')
console.log(colors.unshift('golden'))
console.log(colors)

//concat :- merge array or combine two or more array 
console.log('\n----------concat----------')
let array1 = ['a', 'b', 'c']
let array2 = ['d', 'e', 'f']

let newArray = array1.concat(array2);
console.log(newArray);
let array3 = [1,2,3];
console.log(array1.concat(array2,array3));

// includes :- know element present in array or not and return true and false
console.log('\n------------includes---------');
console.log(newArray.includes('d'));   //return true
console.log(newArray.includes('d', 7));  //start from index 7 return false
console.log(colors.includes('golden'));

// indexOf :- Find index of element in array and if not present it return -1
console.log('\n------------indexOf-----------');
console.log(colors.indexOf('green'));
console.log(colors.indexOf('green', 4)); //start from index 4
console.log(colors.indexOf('black'));

//Reverse:- reverse method reverses an arrary
//first element is last and last array element becomes the first element
console.log('\n------------reverse-----------');
let name =['s', 'u', 'n', 'd', 'e', 'r'];
console.log(name.reverse());

//join:- concatinating all of the arrary elements in a new string
console.log('\n--------------join-------------');
console.log(name.join());
console.log(name.join('-'));

//slice:- copy some portaion of an array
console.log('\n--------------slice-------------');
console.log(name.slice(0,3));  //end not includes
console.log(name.slice(3,5));
console.log(name.slice(2));
console.log(name.slice(-1,-4));  //return empety array
console.log(name.slice(9,12));
console.log(name.slice(1,9));

//splice :- changes the contents of an array by removing or replacing existing elements and/or adding new elements 
console.log('\n------------splice---------');
let animals = ['cow', 'buffalow', 'dog', 'cat'];
console.log(animals);
console.log(animals.splice(1,2));
console.log(animals);
console.log(animals.splice(1,0,'elephant','lion'));
console.log(animals);

//sort():- he sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
console.log('\n-----------sort----------------');
console.log(animals.sort());
let sorting= ['hello', 'apple',1,9,50,6,1000,35,true,NaN,'yellow', 'brown'];
console.log(sorting)
console.log(sorting.sort());

//refrence type
console.log('\n------refrence example----------');
let fruit= 'orange';
let color=fruit;
console.log(`fruit: ${fruit} and color: ${color}`);
fruit ='Apple';
console.log(`fruit: ${fruit} and color: ${color}`);  //because this primitives data types store actual value so color can't change

let num =[4,6,3,8,2];
let otherNum = num;
console.log(`num: ${num} otherNum: ${otherNum}`)
num.push(35,56);
console.log(`num: ${num} otherNum: ${otherNum}`) //this is changed because Array store memory refrence value so they call them by refrence value

//using const with array
//most of time use const for array
console.log('\n---------Const for Array---------');
const constArray = ['why','who', 5, 89];
console.log(constArray);
console.log(constArray.pop());

//Nested Array :- sotre array inside other array
console.log('\n---------Nested Array--------');
const nestedArray = [
    ['he', 'she'],
    ['i', 'we'],
    ['they', 'them']
]
console.log(nestedArray);

const matrix =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(matrix);