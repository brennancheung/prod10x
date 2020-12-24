import React from 'react'
import { AuthLayout } from '../templates/AuthLayout'
import { navItems } from './navItems'

export const Goals = () => {
  return (
    <AuthLayout
      title="Home"
      navItems={navItems}
    >
      This is the goals page.  You must be logged in to see this.
    </AuthLayout>
  )
}
