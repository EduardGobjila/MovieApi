const ul = document.querySelector('#results');



// Method that listens for clicks on the navbar
const buttons = document.querySelectorAll('.action');
buttons.forEach((button) => {
  button.addEventListener('click', event => {
    event.preventDefault()
    // actionWord = event.path[0].innerHTML;
    buttonClick = button.innerHTML;
    ul.innerText = '';
   movieList(buttonClick);
 })
})


// fetching data on search and inserting it in the HTML
const movieList = (word) => {
  fetch(`https://imdb-api.com/en/API/SearchMovie/k_ns10ugu1/${word}`)
    .then(response => response.json())
    .then((data) => {
      // console.log(data.results)
      data.results.forEach((movie) => {
         const allMovies = `
        <a href="show.html">
          <div class="each-movie">
            <li class="movies" style="list-style:none;">
            <div class="each-movie-image">
              <img src="${movie.image}" alt="movie image">
            </div>
            <h1>${movie.title}</h1>
            </li>
          </div>
        </a>
        `;
        ul.insertAdjacentHTML("beforeend", allMovies);
      });
    });
};

// Method that listens for click on the search button and takes the value
// than gives the value to the fetching data
const search = document.querySelector('#search-button');
search.addEventListener('click', (event) => {
  event.preventDefault();
  const movieWord = document.getElementById('movie-search');
   ul.innerText = '';
  movieList(movieWord.value);
});


// fetching data for the home page so i will have around 250 movies
//  without searching any data.
const homePage = () => {
  fetch('https://imdb-api.com/en/API/Top250Movies/k_ns10ugu1')
   .then(response => response.json())
   .then((data) => {
    // console.log(data.items)
    data.items.forEach((tops) => {
      const top250 = `
      <a href="show.html?movie=${tops.id}">
        <div class="each-movie">
          <li class="movies" style="list-style:none;">
        <div class="each-movie-image">
          <img src="${tops.image}" alt="movie image">
        </div>
          <h1>${tops.title}</h1>
          </li>
        </div>
      </a>
      `;
      ul.insertAdjacentHTML("beforeend", top250);
    })
  });
};

homePage();
