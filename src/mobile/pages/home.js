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
  
  return (
    <>
      <Header />
      
    </>
  )
}

export default Home;
