const queryStrings = window.location.search
const urlParams = new URLSearchParams(queryStrings);
const id = urlParams.get('movie')
const image = document.querySelector('#image')
const header = document.querySelector('#header')
const descript = document.querySelector('#description')
const loader = document.querySelector('.loader')
// console.log(loader)
// console.log(ul)





const showPage = (id) => {
  fetch(`https://imdb-api.com/en/API/SearchMovie/k_ns10ugu1/${id}`)
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      if (data.length != 0) {
        // console.log('hello world')
      const show = `
        <img src="${data.results[0].image}">
      `;

      const title = `
        <h1>${data.results[0].title}</h1>
      `;

      const desc = `
      <h3>${data.results[0].description}</h3>
      `
      image.insertAdjacentHTML("beforeend", show)
      header.insertAdjacentHTML('beforeend', title)
      descript.insertAdjacentHTML('beforeend', desc)
      }

        // window.addEventListener('load', () => {
          // console.log('hello')

          //  setTimeout(() => {
         loader.classList.add('loader-hidden')
          //  }, 3000);

          // })
    })


  }

  showPage(id);
