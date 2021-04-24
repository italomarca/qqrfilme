import React from 'react'
import {render} from '@testing-library/react'
import {act} from 'react-dom/test-utils'

import moviedbService from '../../services/moviedbService'
import Home from '../../pages/home'

// 2 - testar o retorno da funcao getMovie com apenas 1 objeto para o random n bugar
// 3 - testar se o retorno é um dos retornos passados
// 4 - teste de snapshot

describe('moviedbService', () => {

  const mockSuccessResponse = {results: [{title: 'Godzilla vs. Kong', overview: 'Em uma época em que os monstros andam na Terra, a luta da humanidade por seu futuro coloca Godzilla e Kong em rota de colisão que verá as duas forças mais poderosas da natureza no planeta se confrontarem em uma batalha espetacular para as idades. Enquanto Monarch embarca em uma missão perigosa em terreno desconhecido e descobre pistas sobre as origens dos Titãs, uma conspiração humana ameaça tirar as criaturas, boas e más, da face da terra para sempre.', vote_average: 8.3, poster_path: '/klAIFewuqcyEmH1SMtR2XbMyqzM.jpg', release_date: '2021-03-24'}]};

  global.fetch = jest.fn(() => 
    Promise.resolve({
      json: () => Promise.resolve(mockSuccessResponse),
    })
  );
  
  beforeEach(() => {
    fetch.mockClear();
  });

  it('Calls correct URI fetch', async () => {
    await moviedbService.getMovie()
    expect(global.fetch).toHaveBeenCalledWith(`${moviedbService.MOVIEDB_API_BASE_URI}/movie/popular?api_key=${moviedbService.API_KEY}&language=pt-BR&page=1`)
  });

  it('Calls endpoint only once', async () => {
    await moviedbService.getMovie()
    expect(global.fetch).toHaveBeenCalledTimes(1)
  });

  it('getMovie function returns correct object', async () => {
    expect(await moviedbService.getMovie()).toMatchObject({
      name: mockSuccessResponse.results[0].title,
      description: mockSuccessResponse.results[0].overview,
      stars: mockSuccessResponse.results[0].vote_average,
      imageUri: mockSuccessResponse.results[0].poster_path ? `${moviedbService.POSTER_API_BASE_URI}${mockSuccessResponse.results[0].poster_path}` : null,
      year: mockSuccessResponse.results[0].release_date.substring(0,4)
    })
  });

  it('getRandomMovie returns ', async () => {

  });

});