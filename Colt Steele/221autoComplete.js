const createAutoComplete = (config) => {
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
}