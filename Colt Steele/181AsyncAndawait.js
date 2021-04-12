//Async keyword
// Async function always return a promise 
// if promise return a value so the promise is resolved with that value
//If the function throws an exception the promise will be rejected

// async function hello(){
//     return 'Hello guy!'
// }
// hello() //promise {resolved: Hello guy}
// hello().then((val) => {
//     console.log('Promise resolved with ', val);
// })
// async function uhoh(){
//     throw new Error('oh no!')
// }
// uhoh(); //promise {<rejected>: Error: oh no!}

//Await keyword
// we can only use the await keyword inside of function declared with async
//await will pause the execution of the function, waiting for a promise to be resolved

// async function getPlanets(){
//     const res = await axios.get('https://swapi.dev/api/planets/');
//     console.log(res.data);
// }
// getPlanets();

//without async and await

// function getPlanets(){
//     return axios.get('https://swapi.dev/api/planets/');
// }
// getPlanets().then((res) => {
//     console.log(res.data);
// })

// Error handling in async function
// async function getPlanets(){
//     const res = await axios.get('https://swapi.dev/api/planets/');
//     console.log(res.data);
// }
// getPlanets()
// //from catch
// .catch((err) => {
//     console.log('In catch error', err);
// })

//from try and catch
// async function getPlanets(){ 
//     try{
//         const res = await axios.get('https://swapi.dev/api/planets/');
//         console.log(res.data);
//     }
//     catch(err){
//         console.log('In catch error', err);
//     }
// }
// getPlanets();

// multiple await
// use await in moving button promise example instead of .then()

//parallel and sequential request

    //sequential request
// async function get3Pokemon(){
//     const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// }
// get3Pokemon();

    //parallel request
async function get3Pokemon(){
    const poked1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const poked2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const poked3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    // const poke1 = await poked1;
    // const poke2 = await poked1;
    // const poke3 = await poked3;
    // console.log(poke1.data);
    // console.log(poke2.data);
    // console.log(poke3.data);

    //promise.all run when all request are resolve
    const results = await Promise.all([poked1, poked2, poked3]);
    console.log(results);
}
get3Pokemon();


// slow process for identifying sequential and parallel request

 function changeBodyColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

//sequence request
async function lightShow(){
    await changeBodyColor('pink', 1000);
    await changeBodyColor('blue', 1000);
    await changeBodyColor('yellow', 1000);
    await changeBodyColor('brown', 1000);
    await changeBodyColor('gold', 1000);
}
lightShow();

//parallel request
// async function lightShow(){
//     const color1 = changeBodyColor('pink', 1000);
//     const color2 = changeBodyColor('blue', 1000);
//     const color3 = changeBodyColor('yellow', 1000);
//     const color4 = changeBodyColor('brown', 1000);
//     const color5 = changeBodyColor('gold', 1000);
//     await color1;
//     await color2;
//     await color3;
//     await color4;
//     await color5;
// }
// lightShow()

