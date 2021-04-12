// New js Features
    //Default Function Parameters
    //Rest & Spread
    //Destructuring

//Default parameters
  // In a function patameter value is defined by programer  
  function multiply(a,b=1){
      return a*b;
  }
  console.log(multiply(5));
  console.log(multiply(5,6));

// spread for function
  //expand the iterable values
  //always use three dots ... for spread
  const nums = [45,3,67,2,85,98,4]
  console.log(Math.max(...nums)); //this ...nums means spread

  function giveMeFour(a,b,c,d){
      console.log('value of a', a);
      console.log('value of b', b);
      console.log('value of c', c);
      console.log('value of d', d);

  }

  const colors =['red', 'green', 'blue', 'white'];
  const str ='GOAT';
  console.log(giveMeFour(1,2,3,4));
  console.log(giveMeFour(...colors));
  console.log(giveMeFour(...str));
  console.log(giveMeFour(colors)); //without spread

//spread in array literal
const nums1 =[1,2,3];
const nums2 =[4,5,6];
console.log(...nums1)
console.log([...nums1,...nums2])

//spread in objectj literal
  //copies properties from one object to new object

  const dog ={
      legs:4,
      family: 'Caniae'
  }
  const cat ={
      ...dog,
      isPet : true
  }
  console.log(dog);
  console.log(cat);

  //rest prameters
  // It looks like spread but it's not
  //collects all remaining arguments into an actual array

  function sum(...numbers){
      return numbers.reduce((total, currVal)=>{
          return total+currVal
      })
  }
 console.log(sum(4,5,7,85));

 function details(first,last, ...other){
     return `${first} ${last} ${other}`
 }
 console.log(details('sunder','rawat','mandhiyali','mahendergerh','haryana','india'));

 //Destructuring
 //A short, clean syntax to unpack : values from arrays, properties from objects Into distinct variables.
 
 //Array Destructring
 const raceResult =[
     'Eluid Kipchoge',
     'Fetisa Lelisa',
     'Galen Rupp',
     'Ghirmay Ghebreslassie',
     'Alphonce Simbu',
     'jared ward'
 ];

//  const gold = raceResult[0];
//  const silver = raceResult[1];
//  const bronze = raceResult[2];

 //above these are equivalent to this destructuring array
 //array value equivalent based on index

 const [gold, silver, bronze] = raceResult;
 //const [gold, , ,forth] = raceResult; //comma(,) for skiping key
// const [gold, silver, bronze, ...other] = raceResult;

//Object Destructing
 //object equivalancy are based on property name(key)

 const runner ={
     first :'Eliud',
     last : 'Kipcoge',
     country: 'kenya',
     title: 'Elder of the order of the Golden Heart of Kenya'
 }

 console.log(runner.first);
 console.log(runner.last);

 const {first, last} =runner;
 //const {first, last, ...other} =runner;
 console.log(first,last);

 const {country: nation, title:honorfic}=runner; //modify key name
 console.log(nation); //kenya
 console.log(runner.country); //kenya
 console.log(runner.nation); //undefined

 //nested destructuring
 
 const results =[
    {
    first :'Eliud',
    last : 'Kipcoge',
    country: 'kenya',
    },
    {
        first :'Feyisa',
        last : 'Lilesa',
        country: 'Ethiopia',
        },
        {
            first :'Galen',
            last : 'Rupp',
            country: 'United States',
            }
]

const [{first:goldWinner}, {country}] =results;

//Destructuring Parametrs
//use variables in function parameters
// function print(person){
//     const {first, last, title} =person;
//     console.log(`${first}, ${last}, ${title}`)
// }

function print({first, last, title}){
    console.log(`${first}, ${last}, ${title}`)
}

print(runner);

const response =['HTTP/1.1','200 OK', 'application/json'];
function parseResponse([protocol, statusCode, contentType]){
    console.log(`Status: ${statusCode}`);
}
parseResponse(response);
