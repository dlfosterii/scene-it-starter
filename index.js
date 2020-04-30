
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
}

document.addEventListener('DOMContentLoaded', function () {
    // code here will execute after the document is loaded
    myForm.addEventListener('submit', function (e) {
        e.preventDefault();
        movieContainer.innerHTML = renderMovies(movieData)

    })
}

);

function saveToWatchlist(imdbID) {
    console.log(imdbID);
    const movie = movieData.find(function(currentMovie) {
        return currentMovie.imdbID == imdbID;
    });
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    if (watchlistJSON == null) {
        watchlist = [];
    }  
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
    

}



