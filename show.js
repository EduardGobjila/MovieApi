

const queryStrings = window.location.search
const urlParams = new URLSearchParams(queryStrings);
const id = urlParams.get('movie')
const ul = document.querySelector('#ul')

// console.log(ul)


const showPage = (id) => {
  fetch(`https://imdb-api.com/en/API/SearchMovie/k_ns10ugu1/${id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const show = `
        ${data.results[0].image}
      `;
      ul.insertAdjacentHTML("beforeend", show)
    })
}


showPage(id);
