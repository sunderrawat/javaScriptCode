//Objects
//Objects are collection on properties
//properties are key-value pair
//  key         value
//  age     :   25
//  username:  'sunderrawat'

// Object literal => { }  <= tichnicaliy this is an object

const firstObject ={
  // key            value  
    username    : 'sunder',
    age         :  25,
    city        :  'Delhi',
     50         :  'fifty'
};
console.log(firstObject);

//Acessing object properties
console.log(firstObject.username);
console.log(firstObject['username']);
console.log(firstObject[50]);
console.log(firstObject['50']);

//Adding or Updating 
firstObject.state ='haryana';   //adding a property
firstObject['country'] = 'India';  //adding a property
firstObject.username = 'Sunder Rawat'  //updating
firstObject[50]= 'Fifty'//updating
console.log(firstObject);

//Nesting:- Objects in objects
const nestObj = {
    player1: 'sunder',
    score: [2,4,5],
    player2: {
        score: [5,6,7],
        name: 'rawat'
    },
    mobile: 'onePlus'

};
console.log(nestObj);

//Objects refrence type are same as array they are also store refrence memory value 

const arr1 = [1,2,3];
const arr2 = [1,2,3];
console.log(arr1===arr2);  //false because they store memorey address not value

const obj1 ={
    name :'sunder',
    age  : 25
}
const obj2 ={
    name :'sunder',
    age  : 25
}
console.log(obj1===obj2);