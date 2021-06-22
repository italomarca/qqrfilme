import React from 'react'
import { create } from 'react-test-renderer'

import Home from '../home'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
  }),
}))

// todo: mock movieDbService

describe('home page', () => {
  const getComponent = () => <Home />

  it('renders correctly', () => {
    const component = create(getComponent())
    expect(component.toJSON()).toMatchSnapshot()
  })
})
