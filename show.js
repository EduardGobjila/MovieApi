// console.log("hello world")

const queryStrings = window.location.search
const urlParams = new URLSearchParams(queryStrings);
const movieTitle = urlParams.get('movie')
const div = document.querySelector('#ul')

console.log(div)


const showPage = (movieTitle) => {
  fetch(`https://imdb-api.com/en/API/SearchMovie/k_ns10ugu1/${movieTitle}`)
    .then(response => response.json())
    .then(data => {
      const show = `
        ${console.log(data.results[0].image)}
      `;
      div.insertAdjacentHTML(show)
    })
}


showPage(movieTitle);
