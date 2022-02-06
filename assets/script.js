var buttons = document.querySelector("#container");
var genre = document.querySelector(".btn");
var value = genre.getAttribute("data-value");
var movieRating = document.querySelector(".ratedBtn");
//var ratingValue = movieRating.getAttribute("data-value");
var movieArray = [];
var finalMovieArray = [];
// var userInputRated = ''
// var userInputRuntime = ''
// var userInputReviews = ''
// var movieTitle = ''
var ratingArr = ['G', 'PG', "PG-13", "R", "NC-17"];


buttons.addEventListener("click", getGenre)
    

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
	ratingArr.forEach(function(rating){
		var btn = document.createElement('button');
		btn.setAttribute('class', `${rating} item ratedBtn`);
		btn.setAttribute('value', rating)

		btn.onclick = filterChoice;

		document.getElementById('sub-container').append(btn)

	})

	for (let i = 0; i < resultsArray.length; i++) {
		var imdbID = data.results[i].imdb_id
		passAlongData(imdbID)
	}
	
})

// .catch(err => {
// 	console.error(err);
// });

}

function passAlongData(iD) {
	fetch('http://www.omdbapi.com/?apikey=62f860e8&i=' + iD)
	.then(response => {
		return response.json();
	})
	.then(data => {
		//console.log(data)
		movieArray.push({title: data.Title, rated: data.Rated, year: data.Year, reviews: data.imdbRating});
		//console.log(movieArray)
		// filterChoice(movieArray);
	
		
		// if (data.Rated == 'The Suicide Squad') {
		//    localStorage.setItem('title',)	
		// }
	})
}

function filterChoice(){
	console.log(this.value)

	for (let index = 0; index < movieArray.length; index++) {
		
		if (this.value === movieArray[index].rated) {
			finalMovieArray.push(movieArray[index])
			
		}
		
	}
	console.log(finalMovieArray)
}
console.log(movieArray)
// for (let index = 0; index < movieArray.length; index++) {
// 	var ratedCategory = movieArray[index].rated
// 	var runtimeCategory = movieArray[index].runtime
// 	var titleCategory = movieArray[index].title
// 	var reviewsCategory = movieArray[index].reviews


// 	console.log(ratedCategory)
// 	console.log(runtimeCategory)
// 	console.log(titleCategory)
// 	console.log(reviewsCategory)
// }	