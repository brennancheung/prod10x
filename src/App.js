import React from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { theme } from './theme'
import { Routes } from './Routes'
import { AuthProvider } from './hooks/useAuth'

function App () {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
