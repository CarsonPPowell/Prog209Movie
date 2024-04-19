let movieName = document.getElementById('movie-name');
let movieRating = document.getElementById('movie-rating');
let movieYear = document.getElementById('movie-year');
let movieList = document.getElementById('movie-list');
let movieDiv = document.getElementById('movie-div');
let movieArray = [];

movieDiv.style.display = 'none';

let movie = function(){
    this.movieName = movieName.value;
    this.movieRating = movieRating.value;
    this.movieYear = movieYear.value;
};


document.getElementById('add-movie').addEventListener('click', function() {
    if(movieName.value === '' || movieRating.value === '' || movieYear.value === ''){
        alert('Please fill in all fields');
        return;
    }
    let newMovie = new movie();
    movieArray.push(newMovie);
    let movieItem = document.createElement('li');
    movieItem.innerHTML = 'Movie: ' +newMovie.movieName + ' (' + newMovie.movieYear + ') - ' + newMovie.movieRating + '/5';
    movieList.appendChild(movieItem);
    movieName.value = '';
    movieRating.value = '';
    movieYear.value = '';
});

document.getElementById('show-movies').addEventListener('click', function() {
    console.log(movieArray);
    movieDiv.style.display = 'block';
});