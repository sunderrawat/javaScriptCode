// Logical Operators are AND(&&) OR(||) NOT(!)
//AND(&&) Both sides are must be true to get true result if any side is false than its give false
console.log(1<=2 && 7>=6)
let password ='sunder rawat'
if(password.length>=8 && password.indexOf(' ') === -1){
    console.log('password is valid')
}
else{
    console.log('password is invalid')
}

// OR(||) if any side is true than all are true
console.log(2==3 || 5>=3)

// NOT(!) returns true id expression is false
console.log(!null)
console.log(!(3<2))