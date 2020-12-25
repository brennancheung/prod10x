import React from 'react'
import PropTypes from 'prop-types'

import { MenuItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { Assessment, BarChart, Dashboard, MyLocation, List, Timer } from '@material-ui/icons'

const items = [
  { text: 'Dashboard',    to: '/',             icon: <Dashboard /> },
  { text: 'Goals',        to: '/goals',        icon: <MyLocation /> },
  { text: 'Tasks',        to: '/tasks',        icon: <List /> },
  { text: 'Reports',      to: '/reports',      icon: <Assessment /> },
  { text: 'Weight',       to: '/weight',       icon: <BarChart /> },
  { text: 'Time',         to: '/time',         icon: <Timer /> },
]

const Nav = ({ text, to, icon }) => (
  <MenuItem component={Link} to={to}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={text} />
  </MenuItem>
)
Nav.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node,
}

export const navItems = items.map(item =>
  <Nav key={item.text} to={item.to} text={item.text} icon={item.icon} />
)
