

const queryStrings = window.location.search
const urlParams = new URLSearchParams(queryStrings);
const movieTitle = urlParams.get('movie')
const ul = document.querySelector('#ul')

console.log(ul)


const showPage = (movieTitle) => {
  fetch(`https://imdb-api.com/en/API/SearchMovie/k_ns10ugu1/${movieTitle}`)
    .then(response => response.json())
    .then(data => {
      const show = `
        ${imgdata.results[0].image}
      `;
      ul.insertAdjacentHTML("beforeend", show)
    })
}


showPage(movieTitle);
