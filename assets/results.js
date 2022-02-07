var resultsContainer = document.getElementById('resultsContainer')
var stringResultsArray = localStorage.getItem('ResultsArray');
var resultsArray = JSON.parse(stringResultsArray);

window.onload = pullResultsArray



function pullResultsArray(){
   //create inject append

   for (let index = 0; index < resultsArray.length; index++) {
        var card = document.createElement('div')
        var poster = document.createElement('img')
        var cardBody = document.createElement('div')
        var movieTitle = document.createElement('h5')
        var cardText = document.createElement('p')
        var factList = document.createElement('ul')
        var misc = document.createElement('li') //reviews
        var misc2 = document.createElement('li') //released
        var misc3 = document.createElement('li') //runtime

        //title: data.Title, rated: data.Rated, year: data.Year, reviews: data.imdbRating, poster: data.Poster, released: data.Released 
        movieTitle.textContent = resultsArray[index].title  // make a source
        cardText.textContent = resultsArray[index].plot
        misc.textContent = resultsArray[index].reviews + ' / 10'
        misc2.textContent = resultsArray[index].runtime
        misc3.textContent = 'Released on: ' + resultsArray[index].released

        card.classList.add('card')
        card.setAttribute('style', 'width: 18rem;')
        poster.classList.add('card-img-top')
        poster.setAttribute('src', resultsArray[index].poster)
        cardBody.classList.add('card-body')
        movieTitle.classList.add('card-title')
        cardText.classList.add('card-text')
        factList.classList.add('list-group', 'list-group-flush')

        resultsContainer.appendChild(card)
        card.append(poster)
        card.append(cardBody)
        cardBody.append(movieTitle)
        cardBody.append(cardText)
        card.append(factList)
        factList.append(misc, misc2, misc3)


        
   }
    
    
}

