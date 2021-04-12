//shorthand object

// const getStats =(arr)=>{
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum,r) => sum+r);
//     const avg =sum/arr.length;
//     return {
//         max: max,
//         min: min,
//         sum: sum,
//         avg: avg
//     }
// }

const getStats =(arr)=>{
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum,r) => sum+r);
    const avg =sum/arr.length;
    return {            //this is shorthand object
        max,
        min,
        sum,
        avg
    }
}

const reviews =[4.5,5.0,3.44,2.8,3.5,4.0,3.5];
const stats =getStats(reviews);
console.log(stats);


// computed property
    //we can use a variable as a key name in an object literal property

    const user = 'jools';
    const userRoles = {
        [user]:'Admin',
        [1+8+6]: 'Fifteen'
    }
    console.log(userRoles);

    //Adding Methods to functions
        //We can add functions as properties on objects. we call them methods.

    const math ={
        multiply: function(x,y){
            return x*y;
        },
        divide : function(x,y){
            return x/y;
        },
        square : function(x){
            return  x*x;
        }
    };

    console.log(math.multiply(5,6));
    console.log(math.divide(60,6));
    console.log(math.square(6));


    //Method shorthand syntax
    const math2 ={
        multiply(x,y){
            return x*y;
        },
        divide(x,y){
            return x/y;
        },
        square(x){
            return  x*x;
        }
    };

    console.log(math2.multiply(5,6));
    console.log(math2.divide(60,6));
    console.log(math2.square(6));


    //Intro to this keyword
    //the keyword this is a refrence of the current execution scope and give object back
    //this is a refrence to an object and that object represents the current execution
    console.log(this);
    function sayHi(){
        console.log('Hi');
        console.log(this);
    }
    sayHi();

    function sayHi2(){
        console.log('Hi 2');
        console.log('Hello this')
        function sayHi3(){
            console.log('Hi 3');
            console.log(this);
        }
        sayHi3();
    }
    sayHi2();
    //var is added in window object but let and const are not added in window object


    //using this in methods
      //use the keyword this to access other properties on the same object
    console.log('using this in methods')
    const person ={
        first: 'sunder',
        last: 'rawat',
        fullName(){
            console.log(this);
        }
    }
    console.log(person.fullName);

    const person2 ={
        first: 'sunder',
        last: 'rawat',
        fullName(){
            console.log(`${this.first} ${this.last}`);
         }
        // fullName(){
        //     console.log(`${first} ${last}`);
        // } //not defined error

        // fullName(){
        //     const {first, last} = this; //destructring
        //     console.log(`${first} ${last}`);
        // }
    }
    console.log(person2.fullName());


    //THIS: Invocation contex
    const annoyer ={
        numbers: [85,45,36,71,28,99,35,714,47],
        pickNumber(){
            const{numbers}=this;
            const idx =Math.floor(Math.random()* numbers.length);
            return numbers[idx]
        },
        start(){
           this.timerID = setInterval(()=>{
                console.log(this.pickNumber())
            },3000)
        },
        stop(){
            clearInterval(this.timerID);
            console.log('Stoped');
        }
    }