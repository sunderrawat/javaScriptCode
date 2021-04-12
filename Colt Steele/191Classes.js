//Constructor function
// function Color(r,g,b){
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function(){
//     const {r,g,b} =this;
//     return `rgb(${r},${g},${b})`;
// }

// const color1 = new Color(255,50,172)
// color1.rgb();

//class
class Color{
    constructor(r,g,b){
        this.r = r;
        this.g = g;
        this.b = b;
    }
    rgb(){
        const {r,g,b} = this;
        return `rgb(${r},${g},${b})`
    }
}

const color1 = new Color(43,244,186);
console.log(color1.rgb());

//extends and super
class Pet{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`
    }
}

class Cat extends Pet{  //extend keyword is inhereting the pet class properties
    meow(){
        return 'Meooww'
    }
}

class Dog extends Pet{
    constructor(name, age, lives){
        super(name, age);
        this.lives =lives;
    }
    bark(){
        return 'woohhh'
    }
    details(){
        return `I am ${this.name} my age is ${this.age} and i living from ${this.lives} years`;
    }
}
const billi = new Cat('Billi', 8);
console.log(billi.meow());
const kuta = new Dog('Kaalu', 11, 5);
console.log(kuta.bark());
console.log(kuta.details());
