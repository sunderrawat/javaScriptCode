// Nesting means condition ke ander condition

let password= 'sunder rawat'
if(password.length>=6){
    if(password.indexOf(' ') !== -1){
        console.log(`password can't contain space`)
    }
    else{
        console.log('valid password')
    }
}
else{
    console.log('password is short')
}