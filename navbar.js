const url = window.location.search;
console.log(url)

const fullTitle = new URLSearchParams(url);

const title = fullTitle.get('the')
console.log(title)
