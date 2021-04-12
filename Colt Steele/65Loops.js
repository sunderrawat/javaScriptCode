// Loops :> repeating code
 // for loop

 for(let i=1; i<=10; i++){
     console.log('hello ', i);
 }

 //infinite loop : those loops whoes never stop
//  for(let i=5; i>=2; i++){
//      console.log('hello infinete loop ', i);
//  }

 // For loops and Array
 const name = ['sunder', 'ravi', 'nikki', 'bhavik'];
 for(let i=0; i<name.length; i++){
     console.log(name[i]);
 }

 const str ='sunder';
 let reverseName='';
 for(let i=str.length-1; i>=0; i--){
     console.log(str[i]);
     reverseName +=str[i];
 }
 console.log(reverseName);

 // Nested for Loops
 // loops inside loop

 for(let i =1; i<=10; i++){
     console.log('Outer Loop ',i);
     for(let j=1; j<=10; j++){
         console.log(' Inner Loop ', j);
     }
 }

 let gameBoard =[
     [2,4,8,32],
     [16,64,4,128],
     [256,32,16,2],
     [32,512,4,8]
 ];
 let total =0;
 for(let i=0; i<gameBoard.length; i++){
     let row =gameBoard[i];
     console.log(row);
     for(let j=0; j<row.length; j++){
        console.log(row[j]); 
        total +=row[j];
     }
 }
 console.log(total);

 // While Loop :> continuous to run as long as its condition is true

 let num=0;
 while(num<10){
     console.log(num);
     num++;
 }

 //more while loop
 const target = Math.floor(Math.random()*10);
 let guess = Math.floor(Math.random()*10);
 while(guess !== target){
     console.log(`Target: ${target} Guess: ${guess}`);
     guess = Math.floor(Math.random()*10);
 }
 console.log('You Win');

 // For .. of loop
 // A nice and easy way to iterate over arrays other iterate objects

 for(let i of name){
     console.log(i);
 }

 for(let i of str){
     console.log(i);
 }

 //More examples
let sum =0;
 for(let game of gameBoard){
     console.log(game);
     for(let el of game){
         console.log(el);
        sum+=el;
     }
 }
console.log(sum);

//for .. of with Objects

const movieReviews= {
    Arrival  : 9.5,
    Alien    : 9,
    'In Burges' : 9,
    Amadeus   : 10
}

for(let movie of Object.keys(movieReviews)){
    console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
let totalRate=0;
for(let r of ratings){
    console.log(r);
    totalRate+=r;
}
let avg =totalRate/ratings.length;
console.log(avg);

//For .. In Loop
// loop over the keys in an objects

for(let movie in movieReviews){
    console.log(movie, movieReviews[movie]);
}