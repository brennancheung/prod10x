import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Box, Container, Grid, Paper, Toolbar, Typography } from '@material-ui/core'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { Copyright } from '../components/Copyright'
import { useAuth } from '../hooks/useAuth'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  title: { flexGrow: 1 },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}))

export const MainLayout = ({ children, navItems, optionalNavItems, title }) => {
  const { initialized, user } = useAuth()
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  if (!initialized) return null
  if (user) return <Redirect to="/dashboard" />

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={clsx(classes.appBar)}>
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          <Grid container>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Paper className={fixedHeightPaper}>
                {children}
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  )
}
MainLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  navItems: PropTypes.node,
  optionalNavItems: PropTypes.node,
}
