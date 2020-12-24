import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { MainLayout } from '../templates/MainLayout'
import { navItems } from './navItems'

export const Home = () => {
  const { signInWithGoogle } = useAuth()
  return (
    <MainLayout
      title="Productivity 10x"
      navItems={navItems}
    >
      <div>
        <Typography variant="h3">
          Scale your productivity 10x
        </Typography>
        <br />

        <Typography variant="subtitle1" component="p">
          An opinionated web app based on personal development practices I have found useful.
        </Typography>
        <br />

        <Typography variant="body1" component="p">
          Note: This is early alpha software.
        </Typography>
        <br />

        <Button onClick={signInWithGoogle} variant="contained" color="primary">Sign in</Button>
      </div>
    </MainLayout>
  )
}
