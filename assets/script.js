var buttons = document.querySelector("#container");
var genre = document.querySelector(".btn");
var value = genre.getAttribute("data-value");

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
		var title = data.results[i].title
		passAlongData(imdbID, title)
	}
})
// .catch(err => {
// 	console.error(err);
// });

}

function passAlongData(iD, movieTitle) {
	fetch('http://www.omdbapi.com/?apikey=62f860e8&i=' + iD)
	.then(response => {
		return response.json();
	})
	.then(data => {
		console.log(data)
	})
}