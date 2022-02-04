var buttons = document.querySelector("#container");
var genre = document.querySelector(".btn");
var value = genre.getAttribute("data-value");
var movieArray = [];
var userInputRated = ''
var userInputRuntime = ''
var userInputReviews = ''
var movieTitle = ''


buttons.addEventListener("click", getGenre)
    

function getGenre(event) {
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
		console.log(data)
		//movieArray.push({title: data.Title, rated: data.Rated, runtime: data.Runtime, reviews: data.imdbRating});
		// console.log(movieArray)
		if (data.Rated == 'The Suicide Squad') {
		   localStorage.setItem('title',)	
		}
	})
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
