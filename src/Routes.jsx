import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Goals } from './pages/Goals'
import { Home } from './pages/Home'

export const Routes = () => (
  <Router>
    <Switch>
      <Route path="/goals" component={Goals} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
)
