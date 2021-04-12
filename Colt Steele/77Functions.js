//Functions
//resuable procedures
function yourData(){
    console.log('name: sunder rawat');
    console.log('age: 25');
    console.log('country: India')
}
yourData();

//roll dice
function rollDice(){
    let roll= Math.floor(Math.random()*6+1);
    console.log(`Rolled: ${roll}`);
}
rollDice();

function throwDice(){
    rollDice();
    rollDice();
    rollDice();
    rollDice();
    rollDice();
    rollDice();
}
throwDice();

//Arguments or parameters
// functions that accept inputs

function greet(name){
    console.log(`Hi, ${name} !`);
}

greet('Sunder');

function throwDice2(num){
    for(let i=0; i<num; i++){
        rollDice();
    }
}

throwDice2(10);

// multiple arguments
//use two or more arguments in functions

function sum(a,b){
    console.log(a+b);
}
sum(3,4);

//return value

 function add(a,b){
    return `Add is ${a+b}`;
}
const additon = add(7,8);

//practice Valid Password

function isValidPasword(username, password){
    return password.indexOf(username) === -1 && password.length >= 8 && password.indexOf(' ') === -1;
}

//challenge 2 Average of array
function avg(arr){
    let sum =0;
    for(let a of arr){
        sum +=a;
    }
    return sum/arr.length;
}

//challege 3 Pangram
// pangram is a sentence that contains every letter of alphabets

function isPangram(sentence){
    let lowerSentence = sentence.toLowerCase();
    for(let char of 'abcdefghijklmnopqurstuvwxyz'){
        if(lowerSentence.indexOf(char) === -1){
            return false;
        }
    }
    return true;
}

//challenge 3 getCard

function getCard(){
    const number =['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const name =['Club', 'Spade', 'Heart', 'Diamond'];

    const numberIdx= Math.floor(Math.random() * number.length);
    const nameIdx= Math.floor(Math.random() * name.length);
    return {
        Value: number[numberIdx],
        Suit : name[nameIdx]
    }
}