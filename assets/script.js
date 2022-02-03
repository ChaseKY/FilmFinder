var buttons = document.querySelector("#container");
var genre = document.querySelector(".btn");
var value = genre.getAttribute("data-value");

buttons.addEventListener("click", getGenre)
    

function getGenre(event) {
    console.log(event.target.getAttribute("data-value"))
    var genreInput = event.target.getAttribute("data-value")
}