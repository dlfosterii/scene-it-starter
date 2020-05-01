
const movieContainer = document.getElementById('movies-container')
const myForm = document.getElementById('search-form');

function renderMovies(movieArray) {
    let movieHtmlArray = movieArray.map(function (currentMovie) {
        return `
        <div id="movie" class="card m-3" style="width: 18rem;">
        <img id="poster"
            src="${currentMovie.Poster}"
            class="card-img-top" alt="${currentMovie.Title}">
        <div class="card-body">
            <div class="titleDate">
            <h5 id="title" class="card-title">${currentMovie.Title}</h5>
            <h4 id="releaseDate"><span class="badge badge-secondary">${currentMovie.Year}</span></h4v>
            </div>
            <a href="#" class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add to Watchlist!</a>
        </div>
        </div>`
    }
    )
    return movieHtmlArray.join('');
};

document.addEventListener('DOMContentLoaded', function () {
    // code here will execute after the document is loaded
    myForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let searchString = document.getElementsByClassName('search-bar')[0].value;
        let urlEncodedSearchString = encodeURIComponent(searchString);
        console.log(urlEncodedSearchString)
        axios.get(`http://www.omdbapi.com/?apikey=efe3c50b&s=${urlEncodedSearchString}`)
        .then(function(response) {
            let movieHTML = renderMovies(response.data.Search);
            movieContainer.innerHTML = movieHTML;
        })
    })
}
);

function saveToWatchlist(imdbID) {
    console.log(imdbID);
    axios.get(`http://www.omdbapi.com/?apikey=efe3c50b&i=${imdbID}`)
    .then(function(response) {
        let movie = response.data;
        let watchlistJSON = localStorage.getItem('watchlist');
        let watchlist = JSON.parse(watchlistJSON);
        if (watchlistJSON == null) {
            watchlist = [];
        }  
        watchlist.push(movie);
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem('watchlist', watchlistJSON);
    })
};

