import React from 'react'
import { AuthLayout } from '../templates/AuthLayout'
import { navItems } from './navItems'

export const Weight = () => {
  return (
    <AuthLayout
      title="Weight"
      navItems={navItems}
    >
      This is the weight page.
    </AuthLayout>
  )
}
