import React from 'react'
import PropTypes from 'prop-types'

import { MenuItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { Dashboard, CallMerge } from '@material-ui/icons'

import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart'
import LayersIcon from '@material-ui/icons/Layers'

const items = [
  { text: 'Dashboard',    to: '/',             icon: <Dashboard /> },
  { text: 'Goals',        to: '/goals',        icon: <CallMerge /> },
  { text: 'Customers',    to: '/customers',    icon: <PeopleIcon /> },
  { text: 'Reports',      to: '/reports',      icon: <BarChartIcon /> },
  { text: 'Integrations', to: '/integrations', icon: <LayersIcon /> },
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
