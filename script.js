const API_KEY = '17ae320932c1273f6e23b709c0465603'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'

const input = document.querySelector('input')
const button = document.querySelector('button')
const section = document.querySelector('section')

button.addEventListener('click', async () => {
  let movieSearch = input.value
  let response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=[${movieSearch}]&api_key=${API_KEY}`
  )
  renderList(response.data.results)
  input.value = ''
  console.log(response)
})
const renderList = (movies) => {
  movies.forEach((movieSearch) => {
    let moviePoster = document.createElement('div')
    moviePoster.innerHTML = `<img src=${
      IMAGE_BASE_PATH + movieSearch.poster_path
    } />`
    let mT = document.createElement('h2')
    mT.innerText = movieSearch.original_title
    section.appendChild(moviePoster)
    section.appendChild(mT)
  })
}
