import React from 'react'
import SignUp from './SignUp'
import Home from './Home'
import Error from './Error'


import { Switch, Link, Route } from 'react-router-dom'

function App() {
  return (
      <>
          <nav>
              <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/SignUp'>sign up</Link></li>
              </ul>
          </nav>
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/SignUp" component={SignUp} />
              <Route component={Error} />
          </Switch>
      </>
  );
}

export default App;
