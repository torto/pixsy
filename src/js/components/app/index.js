import React from 'react'
import { Route, withRouter, Switch} from 'react-router-dom'
import Matches from '../matches'
import Takedown from '../takedown'
import Profile from '../profile'
import Login from '../login'
import Register from '../register'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={withRouter(Login)} />
      <Route path="/app/matches" component={withRouter(Matches)} />
      <Route path="/app/takedown" component={withRouter(Takedown)} />
      <Route path="/app/profile" component={withRouter(Profile)} />
      <Route path="/register" component={withRouter(Register)} />
      <Route component={withRouter(Login)} />
    </Switch>
  </div>
)

export default App
