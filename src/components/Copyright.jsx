import { Link, Typography } from '@material-ui/core'
import React from 'react'

export const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright '}
      {new Date().getFullYear()}
      &nbsp;
      <Link color="inherit" href="/">
        Productivity 10x
      </Link>{' '}
      {'.'}
    </Typography>
  )
}

Copyright.propTypes = {}
