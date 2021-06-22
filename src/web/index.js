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
          </>
        </Route>
        <Route path="/contato">
          <>
          </>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
