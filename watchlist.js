const movieContainer = document.getElementById('watchlist-container')
const startOver = document.getElementById('reset')

document.addEventListener('DOMContentLoaded', function () {
    // code here will execute after the document is loaded
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
            })
            return movieHtmlArray.join('');
        }
    movieContainer.innerHTML = renderMovies(JSON.parse(localStorage.getItem('watchlist')));
    
});

//clears the local storage when returning to start page
document.addEventListener('click', function() {
    localStorage.clear(startOver)
})
