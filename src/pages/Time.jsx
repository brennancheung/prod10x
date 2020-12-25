import React from 'react'
import { AuthLayout } from '../templates/AuthLayout'
import { navItems } from './navItems'

export const Time = () => {
  return (
    <AuthLayout
      title="Time"
      navItems={navItems}
    >
      This is the time page.
    </AuthLayout>
  )
}
