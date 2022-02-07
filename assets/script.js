var buttons = document.querySelector("#container");
var genre = document.querySelector(".btn");
var value = genre.getAttribute("data-value");
var movieRating = document.querySelector(".ratedBtn");
var movieArray = [];
var finalMovieArray = [];
var veryFinalMovieArray = [];
var ratingArr = ['G', 'PG', "PG-13", "R", "NC-17"];
var yearArr = ['year1980-1989', 'year1990-1999', 'year2000-2009', 'year2010-2019', 'year2020-2022'];
var searchButton = document.querySelector("#search");

buttons.addEventListener("click", getGenre)

searchButton.addEventListener("click", finalQuery)

function getGenre(event) {
	document.getElementById('sub-container').classList.remove('hide');

	var genreInput = event.target.getAttribute("data-value")
	fetch(`https://data-imdb1.p.rapidapi.com/movie/byGen/${genreInput}/?page_size=50`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "data-imdb1.p.rapidapi.com",
			"x-rapidapi-key": "279b04dcfemshc0a23d26e174c8ep132e8cjsn6c46292bbe34"
		}
	})
		.then(response => {
			return response.json();
		})
		.then(data => {
			var resultsArray = data.results

			document.getElementById('sub-container').innerHTML = '';
			ratingArr.forEach(function (rating) {
				var btn = document.createElement('button');
				btn.setAttribute('class', `${rating} item ratedBtn`);
				btn.setAttribute('value', rating)

				btn.onclick = getValue2;

				document.getElementById('sub-container').append(btn)
			})

			document.getElementById('sub-container2').innerHTML = '';

			yearArr.forEach(function (year) {
				var btn = document.createElement('button');
				btn.setAttribute('class', `${year} item ratedBtn`);
				btn.setAttribute('value', year)

				btn.onclick = getValue;

				document.getElementById('sub-container2').append(btn)

			});

			for (let i = 0; i < resultsArray.length; i++) {
				var imdbID = data.results[i].imdb_id
				passAlongData(imdbID)
			}
		})
}

function passAlongData(iD) {
	movieArray = []
	fetch('http://www.omdbapi.com/?apikey=62f860e8&i=' + iD)
		.then(response => {
			return response.json();
		})
		.then(data => {

			//console.log(data)
			movieArray.push({ title: data.Title, rated: data.Rated, year: data.Year, reviews: data.imdbRating, poster: data.Poster, runtime: data.Runtime, released: data.Released, plot: data.Plot });
			//console.log(movieArray)
		})
}


function getValue() {
	var valueForYear = this.value
	//console.log(valueForYear)
	localStorage.setItem('year', valueForYear)
}


function getValue2() {
	var valueForRating = this.value
	//console.log(valueForRating)
	localStorage.setItem('rating', valueForRating)
}


function finalQuery() {
	var finalUserRating = localStorage.getItem('rating')
	//console.log(finalUserRating)
	var finalUserYear = localStorage.getItem('year')
	//console.log(finalUserYear)

	//console.log(movieArray)

	for (let index = 0; index < movieArray.length; index++) {

		if (finalUserRating === movieArray[index].rated) {
			finalMovieArray.push(movieArray[index])
		}
	}

	//console.log(finalMovieArray)

	if (finalUserYear === 'year1980-1989') {
		for (let index = 0; index < finalMovieArray.length; index++) {
			if (finalMovieArray[index].year >= 1980 && finalMovieArray[index].year <= 1989) {
				veryFinalMovieArray.push(finalMovieArray[index])
			}
		}
	}
	else if (finalUserYear === 'year1990-1999') {
		for (let index = 0; index < finalMovieArray.length; index++) {
			if (finalMovieArray[index].year >= 1990 && finalMovieArray[index].year <= 1999) {
				veryFinalMovieArray.push(finalMovieArray[index])
			}
		}
	}
	else if (finalUserYear === 'year2000-2009') {
		for (let index = 0; index < finalMovieArray.length; index++) {
			if (finalMovieArray[index].year >= 2000 && finalMovieArray[index].year <= 2009) {
				veryFinalMovieArray.push(finalMovieArray[index])
			}
		}
	}
	else if (finalUserYear === 'year2010-2019') {
		for (let index = 0; index < finalMovieArray.length; index++) {
			if (finalMovieArray[index].year >= 2010 && finalMovieArray[index].year <= 2019) {
				veryFinalMovieArray.push(finalMovieArray[index])
			}
		}
	}
	else if (finalUserYear === 'year2020-2022') {
		for (let index = 0; index < finalMovieArray.length; index++) {
			if (finalMovieArray[index].year >= 2020 && finalMovieArray[index].year <= 2022) {
				veryFinalMovieArray.push(finalMovieArray[index])
			}
		}
	}

	//console.log(veryFinalMovieArray)
	localStorage.setItem('ResultsArray', JSON.stringify(veryFinalMovieArray))
	window.location.href = 'results.html';
}