const API_KEY = '6af1acbb5b00250f0669d50b891c76c6'
const MOVIEDB_API_BASE_URI = 'https://api.themoviedb.org/3'
const POSTER_API_BASE_URI = 'https://image.tmdb.org/t/p/w500'

// maybe this should be in a commonService of kind instead of
// here but for now, since this is the only common service, this
// will stay here
const getRandomInt = (min, max) => {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min)
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min))
}

const getRandomMovie = (movies) => movies[getRandomInt(1, movies.length)]

const getMovie = async () =>
  // TODO: handle rejection
  fetch(
    `${MOVIEDB_API_BASE_URI}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`,
  )
    .then((r) => r.json())
    .then((r) => {
      const movies = r.results
      const resultMovie = getRandomMovie(movies)
      return {
        name: resultMovie.title,
        description: resultMovie.overview,
        stars: resultMovie.vote_average,
        imageUri: resultMovie.poster_path
          ? `${POSTER_API_BASE_URI}${resultMovie.poster_path}`
          : null,
        year: resultMovie.release_date.substring(0, 4),
      }
    })

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  API_KEY,
  MOVIEDB_API_BASE_URI,
  POSTER_API_BASE_URI,
  getRandomInt,
  getRandomMovie,
  getMovie,
}
