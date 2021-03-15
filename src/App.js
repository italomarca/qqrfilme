import {useEffect, useState} from 'react';
import Dotdotdot from 'react-dotdotdot';

const API_KEY = '6af1acbb5b00250f0669d50b891c76c6'
const MOVIEDB_API_BASE_URI = 'https://api.themoviedb.org/3'
const POSTER_API_BASE_URI = 'https://image.tmdb.org/t/p/w500'

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
    fetch(`${MOVIEDB_API_BASE_URI}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
      .then(r => r.json())
      .then(r => {
        const movie = r.results[getRandomInt(1, r.results.length)]
        console.log(movie)
        setMovie({
          name: movie.title,
          description: movie.overview,
          stars: movie.vote_average,
          imageUri: movie.poster_path ? `${POSTER_API_BASE_URI}${movie.poster_path}` : null,
          year: movie.release_date.substring(0,4)
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
          <div style={description}><Dotdotdot clamp={3}>{movie.description}</Dotdotdot></div>
        </div>
        {movie.imageUri && <img style={image} src={movie.imageUri} alt="movie" />}
      </div>
      <div style={footerWrapper}>
        <div style={rateAndYear}>
          <p>{`${movie.stars} - ${movie.year}`}</p>
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
    justifyContent: 'space-between',
    margin: 20,
    marginTop: 40
  },
  left: {
    flex: 1,
    maxWidth: '70%'
  },
  image: {
    maxHeight: 500,
    maxWidth: 300,
    marginTop: 100,
    marginLeft: 30
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
  rateAndYear: {
    flex: 1,
    color: TEXT_COLOR,
    margin: 10,
    height: 40,
    fontSize: 26
  },
  footerWrapper: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between'
  },
  footerButton: {
    margin: 10,
    flex: 1,
    color: '#000',
    backgroundColor: TEXT_COLOR,
    fontWeight: 600,
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }
}

const Header = () => {
  const { wrapper, slot } = headerStyles;
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
