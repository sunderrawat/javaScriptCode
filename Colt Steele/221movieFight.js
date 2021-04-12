const fetchData = async (searchTerm) => {
    const response = await axios(' http://www.omdbapi.com/', {
        params: {
            apikey: '8c1fb9d1',
            s: searchTerm
        }
    })  
    if(response.data.Error){
        return [];
    }
    return response.data.Search
}
const root = document.querySelector('.autocomplete')
root.innerHTML = `
<lable><b>Search For a Movie</b></lable>
<input class="input" />
<div class = "dropdown">
 <div class = "dropdown-menu">
    <div class = "dropdown-content results"></div>
 </div>
</div>
`;
const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');


// let timeoutId;
// const onInput = event =>{
//     if(timeoutId){
//         clearTimeout(timeoutId);
//     }
//     timeoutId = setTimeout(()=>{
//         fetchData(event.target.value);
//     },700)
// }

// input.addEventListener('input', onInput);

//debounce

const debounce = (func, delay=1000) =>{
    let timeoutId;
    return (...args) =>{
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args)
        },delay)
    }   
}

const onInput = async event => {
      const movies = await fetchData(event.target.value);

      if(!movies.length){
          dropdown.classList.remove('is-active');
          return;
      }

      resultsWrapper.innerHTML = '';
      dropdown.classList.add('is-active');
      for (let movie of movies){
          const option = document.createElement('a');
          const imgSrc = movie.Poster === "N/A" ? '' : movie.Poster ;
          option.classList.add('dropdown-item')
          option.innerHTML =`
          <img src="${imgSrc}"/>
          ${movie.Title}
          `
          option.addEventListener('click', () => {
              dropdown.classList.remove('is-active');
              input.value = movie.Title;
              onMovieSelect(movie);
          });
          resultsWrapper.appendChild(option);
      }
}

input.addEventListener('input', debounce(onInput, 2000));

document.addEventListener('click', event => {
    if(!root.contains(event.target)){
        dropdown.classList.remove('is-active');
    }
});

const onMovieSelect = async movie => {
    const response = await axios(' http://www.omdbapi.com/', {
        params: {
            apikey: '8c1fb9d1',
            i: movie.imdbID
        }
    });
    document.querySelector('#summary').innerHTML= movieTemplate(response.data); 
    console.log(response.data); 
}

const movieTemplate = movieDetails => {
return `
    <article class = "media">
        <figure class= "media-left">
            <p class="image">
                <img src="${movieDetails.Poster}" />
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <h1>${movieDetails.Title}</h1>
                <h4>${movieDetails.Genre}</h4>
                <p>${movieDetails.Plot}</p>
            </div>
        </div>
    </article>
    <article class="notification is-primary">
    <p class ="title">${movieDetails.BoxOffice}</p>
    <p class ="subtitle">Box Office</p>
    </article>
    <article class="notification is-primary">
    <p class ="title">${movieDetails.Metascore}</p>
    <p class ="subtitle">Metascore</p>
    </article>
    <article class="notification is-primary">
    <p class ="title">${movieDetails.Awards}</p>
    <p class ="subtitle">Awards</p>
    </article>
    <article class="notification is-primary">
    <p class ="title">${movieDetails.imdbRating}</p>
    <p class ="subtitle">IMDB Rating</p>
    </article>
    <article class="notification is-primary">
    <p class ="title">${movieDetails.imdbVotes}</p>
    <p class ="subtitle">IMDB Votes</p>
    </article>
`;
}