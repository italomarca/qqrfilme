import React, {useEffect, useState} from 'react';


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
    const movie = await moviedbService.getMovie()
    setMovie(movie)
  }
  
  return (
    <>
      <Header />
      {
        movie
        ? <MovieDescription movie={movie} updateMovie={updateMovie} />
        : <Loading />
      }
    </>
  )
}

export default Home;
