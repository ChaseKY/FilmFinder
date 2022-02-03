var buttons = document.querySelector("#container");
var genre = document.querySelector(".btn");
var value = genre.getAttribute("data-value");

buttons.addEventListener("click", getGenre)
    

function getGenre(event) {
    console.log(event.target.getAttribute("data-value"))
    var genreInput = event.target.getAttribute("data-value")
    fetch(`https://data-imdb1.p.rapidapi.com/movie/byGen/${genreInput}/?page_size=50`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "data-imdb1.p.rapidapi.com",
		"x-rapidapi-key": "279b04dcfemshc0a23d26e174c8ep132e8cjsn6c46292bbe34"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
}