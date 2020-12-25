import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Goals } from './pages/Goals'
import { Home } from './pages/Home'
import { Reports } from './pages/Reports'
import { Tasks } from './pages/Tasks'
import { Weight } from './pages/Weight'
import { Time } from './pages/Time'

export const Routes = () => (
  <Router>
    <Switch>
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/goals"     component={Goals}     />
      <Route path="/tasks"     component={Tasks}     />
      <Route path="/reports"   component={Reports}     />
      <Route path="/weight"    component={Weight}     />
      <Route path="/time"      component={Time}     />
      <Route path="/"          component={Home}      />
    </Switch>
  </Router>
)
