import React, { useEffect, useState } from 'react'

import moviedbService from '../services/moviedbService'
import Loading from '../components/Loading'
import Header from '../components/Header'
import MovieDescription from '../components/MovieDescription'

const Home = () => {
  const [movie, setMovie] = useState()

  useEffect(() => {
    updateMovie()
  }, [])

  const updateMovie = async () => {
    const movieFromRemote = await moviedbService.getMovie()
    setMovie(movieFromRemote)
  }

  const backgroundStyle = movie
    ? { ...styles.wrapper, ...getBackgroundStyleWithImage(movie.imageUri) }
    : styles.wrapper

  return (
    <div style={backgroundStyle}>
      <Header />
      {movie ? (
        <MovieDescription movie={movie} updateMovie={updateMovie} />
      ) : (
        <Loading />
      )}
    </div>
  )
}

const getBackgroundStyleWithImage = (imgUrl) => ({
  backgroundImage: `url("${imgUrl}")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundAttachment: 'fixed',
})

const styles = {
  wrapper: {
    display: 'flex',
    flex: 1,
    minHeight: '100%',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
}

export default Home
