import React from 'react'
import SignUp from './SignUp'
import Home from './Home'
import Error from './Error'
import Login from "./Login"

import { Switch, Link, Route } from 'react-router-dom'

function App() {
  return (
      <>
          <nav>
              <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/SignUp'>sign up</Link></li>
                  <li><Link to='/Login'>Login</Link></li>
              </ul>
          </nav>
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/SignUp" component={SignUp} />
              <Route path="/Login" component={Login} />
              <Route component={Error} />
          </Switch>
      </>
  );
}

export default App;
