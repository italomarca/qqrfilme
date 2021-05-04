import {useEffect, useState} from 'react';


import moviedbService from '../../services/moviedbService'
import Loading from '../components/Loading'
import Header from '../components/Header'
import MovieDescription from '../components/MovieDescription'


const Home = () => {
  const [movie, setMovie] = useState()

  useEffect(() => {
    updateMovie()
  }, [])

  const updateMovie = async () => {
    const movie = await moviedbService.getMovie()
    setMovie(movie)
  }

  const backgroundStyle = movie 
    ? getBackgroundStyleWithImage(movie.imageUri)
    : styles.wrapper
  
  return (
    <div style={backgroundStyle}>
      <Header />
      {
        movie
        ? <MovieDescription movie={movie} updateMovie={updateMovie} />
        : <Loading />
      }
    </div>
  )
}

const getBackgroundStyleWithImage = imgUrl => ({
  backgroundImage: `url("${imgUrl}")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  ...styles.wrapper
})

const styles = {
  wrapper: {
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  }
}

export default Home;
