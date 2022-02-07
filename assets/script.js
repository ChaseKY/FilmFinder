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
	fetch(`https://data-imdb1.p.rapidapi.com/movie/byGen/${genreInput}/?page_size=5`, {
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

				btn.onclick = filterChoice;

				document.getElementById('sub-container').append(btn)
			})

			document.getElementById('sub-container2').innerHTML = '';

			yearArr.forEach(function (year) {
				var btn = document.createElement('button');
				btn.setAttribute('class', `${year} item ratedBtn`);
				btn.setAttribute('value2', year)

				btn.onclick = filterChoice;

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
			movieArray.push({ title: data.Title, rated: data.Rated, year: data.Year, reviews: data.imdbRating });
			console.log(movieArray)
		})
}
var chosenRating;
var choseYear;

function filterChoice() {
	// console.log(this.value)
	// console.log(this.getAttribute('value2'))

	if (this.value === 'G'){
		chosenRating = 'G';
		choseYear=''
		globalThis.chosenRating = 'G'
	}
	else if (this.value ==='PG'){
		chosenRating= 'PG'
		choseYear=''
	}
	else if (this.value ==='PG-13'){
		chosenRating= 'PG-13'
		choseYear=''
	}
	else if (this.value ==='R'){
		chosenRating= 'R'
		choseYear=''
	}
	else if (this.value ==='NC-17'){
		chosenRating= 'NC-17'
		choseYear=''
	}

	else if (this.getAttribute('value2') === 'year1980-1989'){
		chosenRating= ''
		choseYear= 'year1980-1989'
	}
	else if (this.getAttribute('value2') === 'year1990-1999'){
		chosenRating= ''
		choseYear= 'year1990-1999'
	}
	else if (this.getAttribute('value2') === 'year2000-2009'){
		chosenRating= ''
		choseYear= 'year2000-2009'
	}
	else if (this.getAttribute('value2') === 'year2010-2019'){
		chosenRating= ''
		choseYear= 'year2010-2019'
	}
	else if (this.getAttribute('value2') === 'year2020-2022'){
		chosenRating= ''
		choseYear= 'year2020-2022'
	}

	else if (this.value === 'G' && this.getAttribute('value2') === 'year1980-1989') {
		chosenRating= 'G'
		choseYear= 'year1980-1989'
	}
	else if (this.value === 'G' && this.getAttribute('value2') === 'year1990-1999') {
		chosenRating= 'G'
		choseYear= 'year1990-1999'
	}
	else if (this.value === 'G' && this.getAttribute('value2') === 'year2000-2009') {
		chosenRating= 'G'
		choseYear= 'year2000-2009'
	}
	else if (this.value === 'G' && this.getAttribute('value2') === 'year2010-2019') {
		chosenRating= 'G'
		choseYear= 'year2010-2019'
	}
	else if (this.value === 'G' && this.getAttribute('value2') === 'year2020-2022') {
		chosenRating= 'G'
		choseYear= 'year2020-2022'
	}

	else if (this.value === 'PG' && this.getAttribute('value2') === 'year1980-1989') {
		chosenRating= 'PG'
		choseYear= 'year1980-1989'
	}
	else if (this.value === 'PG' && this.getAttribute('value2') === 'year1990-1999') {
		chosenRating= 'PG'
		choseYear= 'year1990-1999'
	}
	else if (this.value === 'PG' && this.getAttribute('value2') === 'year2000-2009') {
		chosenRating= 'PG'
		choseYear= 'year2000-2009'
	}
	else if (this.value === 'PG' && this.getAttribute('value2') === 'year2010-2019') {
		chosenRating= 'PG'
		choseYear= 'year2010-2019'
	}
	else if (this.value === 'PG' && this.getAttribute('value2') === 'year2020-2022') {
		chosenRating= 'PG'
		choseYear= 'year2020-2022'
	}

	else if (this.value === 'PG-13' && this.getAttribute('value2') === 'year1980-1989') {
		chosenRating= 'PG-13'
		choseYear= 'year1980-1989'
	}
	else if (this.value === 'PG-13' && this.getAttribute('value2') === 'year1990-1999') {
		chosenRating= 'PG-13'
		choseYear= 'year1990-1999'
	}
	else if (this.value === 'PG-13' && this.getAttribute('value2') === 'year2000-2009') {
		chosenRating= 'PG-13'
		choseYear= 'year2000-2009'
	}
	else if (this.value === 'PG-13' && this.getAttribute('value2') === 'year2010-2019') {
		chosenRating= 'PG-13'
		choseYear= 'year2010-2019'
	}
	else if (this.value === 'PG-13' && this.getAttribute('value2') === 'year2020-2022') {
		chosenRating= 'PG-13'
		choseYear= 'year2020-2022'
	}

	else if (this.value === 'R' && this.getAttribute('value2') === 'year1980-1989') {
		chosenRating= 'R'
		choseYear= 'year1980-1989'
	}
	else if (this.value === 'R' && this.getAttribute('value2') === 'year1990-1999') {
		chosenRating= 'R'
		choseYear= 'year1990-1999'
	}
	else if (this.value === 'R' && this.getAttribute('value2') === 'year2000-2009') {
		chosenRating= 'R'
		choseYear= 'year2000-2009'
	}
	else if (this.value === 'R' && this.getAttribute('value2') === 'year2010-2019') {
		chosenRating= 'R'
		choseYear= 'year2010-2019'
	}
	else if (this.value === 'R' && this.getAttribute('value2') === 'year2020-2022') {
		chosenRating= 'R'
		choseYear= 'year2020-2022'
	}

	else if (this.value === 'NC-17' && this.getAttribute('value2') === 'year1980-1989') {
		chosenRating= 'NC-17'
		choseYear= 'year1980-1989'
	}
	else if (this.value === 'NC-17' && this.getAttribute('value2') === 'year1990-1999') {
		chosenRating= 'NC-17'
		choseYear= 'year1990-1999'
	}
	else if (this.value === 'NC-17' && this.getAttribute('value2') === 'year2000-2009') {
		chosenRating= 'NC-17'
		choseYear= 'year2000-2009'
	}
	else if (this.value === 'NC-17' && this.getAttribute('value2') === 'year2010-2019') {
		chosenRating= 'NC-17'
		choseYear= 'year2010-2019'
	}
	else if (this.value === 'NC-17' && this.getAttribute('value2') === 'year2020-2022') {
		chosenRating= 'NC-17'
		choseYear= 'year2020-2022'
	}
	console.log(userChoiceRating)
	console.log(userChoiceYear)
	console.log(userChoiceYear , userChoiceRating)
}
	
	
function finalQuery(chosenRating,choseYear){

	for (let index = 0; index < movieArray.length; index++) {

		if (chosenRating === movieArray[index].rated) {
			finalMovieArray.push(movieArray[index])
		}
		}

	if (choseYear === 'year1980-1989') {
		for (let index = 0; index < finalMovieArray.length; index++) {
			if (finalMovieArray[index].year >= 1980 && finalMovieArray[index].year <= 1989) {
				veryFinalMovieArray.push(finalMovieArray[index])
			}
		}
	}
	else if (choseYear === 'year1990-1999') {
		for (let index = 0; index < finalMovieArray.length; index++) {
			if (finalMovieArray[index].year >= 1990 && finalMovieArray[index].year <= 1999) {
				veryFinalMovieArray.push(finalMovieArray[index])
			}
		}
	}
	else if (choseYear === 'year2000-2009') {
		for (let index = 0; index < finalMovieArray.length; index++) {
			if (finalMovieArray[index].year >= 2000 && finalMovieArray[index].year <= 2009) {
				veryFinalMovieArray.push(finalMovieArray[index])
			}
		}
	}
	else if (choseYear === 'year2010-2019') {
		for (let index = 0; index < finalMovieArray.length; index++) {
			if (finalMovieArray[index].year >= 2010 && finalMovieArray[index].year <= 2019) {
				veryFinalMovieArray.push(finalMovieArray[index])
			}
		}
	}
	else if (choseYear === 'year2020-2022') {
		for (let index = 0; index < finalMovieArray.length; index++) {
			if (finalMovieArray[index].year >= 2020 && finalMovieArray[index].year <= 2022) {
				veryFinalMovieArray.push(finalMovieArray[index])
			}
		}
	}	
	console.log(veryFinalMovieArray)
}