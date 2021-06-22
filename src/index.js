import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Home from './pages/home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/sobre">
          <>
            {/* not implemented yet */}
          </>
        </Route>
        <Route path="/contato">
          <>
            {/* not implemented yet */}
          </>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);