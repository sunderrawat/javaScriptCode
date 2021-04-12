//Request
    //fetching data from api or sending and reciving data from server
    //multiple ways
    // XMLHttpRequest
    // fetch
    // Axios


    //Intro to AJAX/ AJAJ
        //Asynchronous JavaScript And XML/JSON
    // these days browser get a reponse from server in the form of json
    //JSON and XML are format of data

    //XMLHttpRequest
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl ='https://swapi.dev/api/planets/'
    const url = proxyUrl+ apiUrl; // his fix cors error

    // const newReq = new XMLHttpRequest();
    // newReq.addEventListener('load', () =>{
    //     console.log('Its work')
    //     const data = JSON.parse(newReq.responseText);
        
    //     for(let planets of data.results){
    //         console.log(planets.name);
    //     }
    // });
    // newReq.addEventListener('error', ()=>{
    //     console.log('Not work error')
    // });

    // newReq.open('GET', url);
    // newReq.send();
    // console.log('request sent');
    
    // fetch(apiUrl)
    // .then((response) => {
    //     console.log(response);
    //     response.json().then((data) => {
    //         for(let planets of data.results){
    //             console.log(planets.name);
    //         }
    //     })
    // })
    // .catch((err) => {
    //     console.log('Something went wrong',err)
    // })

    //Axios is an external library for making http request
    axios.get(apiUrl)
    // .then((response)=>{
    //     console.log(response);
    //     console.log(response.data);
    //     for(let planets of response.data.results){
    //         console.log(planets.name);
    //     }
    // })
    .then(({data}) =>{
        for(let planets of data.results){
            console.log(planets.name);
        }
    })  
    .catch((err) => {
        console.log('IN catch error', err);
    })

    //sequential axios request

    axios.get(apiUrl)
    .then(({data}) =>{
        for(let planets of data.results){
            console.log(planets.name);
        }
        return axios.get(data.next);
        //next 10 planets name
        // axios.get(data.next)
        // .then(({data}) => {
        //     for(let planets of data.results){
        //         console.log(planets.name);
        //     } 
        // })
    })
     .then(({data}) => {
            for(let planets of data.results){
                console.log(planets.name);
            } 
        })
    .catch((err) => {
        console.log('IN catch error', err);
    })
