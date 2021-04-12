//practice with modules

const value = 10;
console.log('exporting module')

export const cart = [];
const add = function(name, quantity){
    cart.push(name, quantity);
    console.log(`${name} ${quantity} are added into cart`)
}

export {value, add}