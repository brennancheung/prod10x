import React, { useState, useEffect, useContext, createContext } from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase/app'
import { firebaseConfig } from '../firebaseConfig'
import 'firebase/auth'

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
AuthProvider.propTypes = {
  children: PropTypes.node,
}

export const useAuth = () => useContext(AuthContext)

const useProvideAuth = () => {
  const [user, setUser] = useState(null)
  const [initialized, setInitialized] = useState(false)

  const signInWithGoogle = () => {
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false)
      })
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user || false)
      setInitialized(true)
    })
    return () => unsubscribe()
  }, [])

  return { initialized, user, signInWithGoogle, signOut }
}
