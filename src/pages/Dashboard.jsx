import React from 'react'
import { AuthLayout } from '../templates/AuthLayout'
import { navItems } from './navItems'

export const Dashboard = () => {
  return (
    <AuthLayout
      title="Home"
      navItems={navItems}
    >
      This is the Dashboard page.  You must be logged in to see this.
    </AuthLayout>
  )
}
