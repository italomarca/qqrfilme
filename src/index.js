import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeWeb from './web/pages/home'
import HomeMobile from './mobile/pages/home'

import { useMediaQuery } from 'react-responsive'

const App = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  /** not used for now
   * const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
   * const isTabletOrMobileDevice = useMediaQuery({
   *   query: '(max-device-width: 1224px)'
   * })
   * const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
   * const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
   * const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
   */ 
  
  isDesktopOrLaptop ? console.log('web') : console.log('mobile')
  return isDesktopOrLaptop 
    ? <HomeWeb />
    : <HomeMobile />
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
