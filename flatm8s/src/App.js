import React from 'react'
import SignUp from './SignUp'
import Home from './Home'
import Error from './Error'
import UserLogin from "./UserLogin"
import ConnectToFlat from "./ConnectToFlat";
import { Switch, Link, Route } from 'react-router-dom'


function App() {
  return (
      <>
          <nav>
              <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/SignUp'>Sign Up</Link></li>
                  <li><Link to='/UserLogin'>Login</Link></li>
                  <li><Link to='/ConnectFlat'>Find a flat</Link></li>
              </ul>
          </nav>
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/SignUp" component={SignUp} />
              <Route path="/UserLogin" component={UserLogin} />
              <Route path="/ConnectFlat" component={ConnectToFlat} />
              <Route component={Error} />
          </Switch>
      </>
  );
}

export default App;
