import {useEffect, useState} from 'react';

const API_KEY = '6af1acbb5b00250f0669d50b891c76c6'
const MOVIEDB_API_URI = 'https://api.themoviedb.org/'

const ROUTES = {
  latest: '3/movie/latest',
  movie: 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US'
}

const DATA = {
  movies: [
    {
      name: 'Pulp Fiction: Tempo de Violência',
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      year: 1994,
      stars: 8.9,
      imageUri: 'https://images-na.ssl-images-amazon.com/images/I/71c05lTE03L._AC_SL1024_.jpg'
    }
  ]
}

const TEXT_COLOR = '#fff'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const App = () => {
  const [movie, setMovie] = useState(DATA.movies[0])

  useEffect(() => {
    updateMovie()
  }, [])

  const updateMovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(r => r.json())
      .then(r => {
        const movie = r.results[getRandomInt(1, r.results.length)]
        setMovie({
          name: movie.title,
          description: movie.overview,
          stars: movie.vote_average,
        })
      })
  }
  const selectedMovie = DATA.movies[0]
  return (
    <>
      <Header />
      {
        selectedMovie
        ? <MovieDescription movie={movie} updateMovie={updateMovie} />
        : <Loading />
      }
    </>
  )
}

const Loading = () => {
  return (
    <div style={loadingStyles.wapper}>
      <p>Peraê...</p>
    </div>
  )
}
const loadingStyles = {
  wapper: {
    color: TEXT_COLOR,
    fontSize: 144,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
}

const MovieDescription = ({movie, updateMovie}) => {
  const {
    wrapper,
    left,
    image,
    title,
    description,
    footerWrapper,
    rateAndYear,
    footerButton
  } = movieDescriptionStyles;

  return (
    <>
      <div style={wrapper}>
        <div style={left}>
          <div style={title}>{movie.name}</div>
          <div style={description}>{movie.description}</div>
        </div>
        <img style={image} src={movie.imageUri} alt="movie" />
      </div>
      <div style={footerWrapper}>
        <div style={rateAndYear}>
          <p>{`${movie.stars} ${movie.year}`}</p>
        </div>
        <div style={footerButton} onClick={() => window.open(`https://www.google.com/search?q=assistir ${movie.name}`)}><p>EH ISSO</p></div>
        <div style={footerButton} onClick={updateMovie}><p>NAH</p></div>
      </div>
    </>
  );
}

const movieDescriptionStyles = {
  wrapper: {
    display: 'flex',
    margin: 20,
    marginTop: 40
  },
  left: {
    flex: 1,
    maxWidth: '70%'
  },
  image: {
    maxHeight: 300,
    maxWidth: 200,
    marginTop: 100,
  },
  title: {
    color: TEXT_COLOR,
    fontSize: 98,
  },
  description: {
    marginTop: 20,
    color: TEXT_COLOR,
    fontSize: 36
  },
  footerWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between'
  },
  rateAndYear: {
    flex: 1,
    color: TEXT_COLOR,
    margin: 10,
    height: 40,
  },
  footerButton: {
    margin: 10,
    flex: 1,
    color: TEXT_COLOR,
    textAlign: 'center',
    border: `2px solid ${TEXT_COLOR}`,
    borderRadius: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

const Header = () => {
  const { wrapper, slot, p } = headerStyles;
  return (
    <div style={wrapper}>
      <div style={slot}><p>SOBRE</p></div>
      <div style={slot}><p>CONTATO</p></div>
      <div style={slot}>
        <div style={{flex:1, textAlign: 'end', marginRight: 5}}><p>🇧🇷</p></div>
        <div style={{flex:1}}><p>🇺🇸</p></div>
      </div>
    </div>
  )
}

const headerStyles = {
  wrapper: {
    display: 'flex',
    flex: 1,
    paddingTop: 20,
    maxWidth: 500,
    maxHeight: 50,
  },
  slot: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    fontSize: 18,
    justifyContent: 'center',
    color: TEXT_COLOR
  },
}



export default App;
