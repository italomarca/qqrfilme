import React from 'react'
import {render} from '@testing-library/react'
import {act} from 'react-dom/test-utils'

import moviedbService from '../../services/moviedbService'

describe('moviedbService', () => {

  const movieFetchResponse = {
    results: [{
      title: 'Godzilla vs. Kong', 
      overview: 'Em uma época em que os monstros andam na Terra, a luta da humanidade por seu futuro coloca Godzilla e Kong em rota de colisão que verá as duas forças mais poderosas da natureza no planeta se confrontarem em uma batalha espetacular para as idades. Enquanto Monarch embarca em uma missão perigosa em terreno desconhecido e descobre pistas sobre as origens dos Titãs, uma conspiração humana ameaça tirar as criaturas, boas e más, da face da terra para sempre.', 
      vote_average: 8.3, 
      poster_path: '/klAIFewuqcyEmH1SMtR2XbMyqzM.jpg', 
      release_date: '2021-03-24'
    }]
  };

  global.fetch = jest.fn(() => 
    Promise.resolve({
      json: () => Promise.resolve(movieFetchResponse),
    })
  );
  
  beforeEach(() => {
    fetch.mockClear();
  });

  it('calls correct URI fetch', async () => {
    await moviedbService.getMovie()
    expect(global.fetch).toHaveBeenCalledWith(`${moviedbService.MOVIEDB_API_BASE_URI}/movie/popular?api_key=${moviedbService.API_KEY}&language=pt-BR&page=1`)
  });

  it('calls endpoint only once', async () => {
    await moviedbService.getMovie()
    expect(global.fetch).toHaveBeenCalledTimes(1)
  });

  it('getMovie function returns correct object', async () => {
    expect(await moviedbService.getMovie()).toMatchObject({
      name: movieFetchResponse.results[0].title,
      description: movieFetchResponse.results[0].overview,
      stars: movieFetchResponse.results[0].vote_average,
      imageUri: movieFetchResponse.results[0].poster_path,
      year: movieFetchResponse.results[0].release_date.substring(0,4)
    })
  });

  it('getRandomMovie returns one of the items passed', async () => {
    const items = [1, 2, 3, 4, 5, 6, 7];
    expect(items).toContain(moviedbService.getRandomMovie(items))

  });

  it('getRandomInt returns valid index', async () => {
    expect(moviedbService.getRandomInt(1, 1)).toEqual(0)
    expect(moviedbService.getRandomInt(1, 10)).toBeLessThanOrEqual(9)
    expect(moviedbService.getRandomInt(1, 10)).toBeGreaterThanOrEqual(0)
  });

  it('getRandomInt returns valid index', async () => {
    expect(moviedbService.getRandomInt(1, 1)).toEqual(0)
    expect(moviedbService.getRandomInt(1, 10)).toBeLessThanOrEqual(9)
    expect(moviedbService.getRandomInt(1, 10)).toBeGreaterThanOrEqual(0)
  });

});