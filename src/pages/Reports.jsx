import React from 'react'
import { AuthLayout } from '../templates/AuthLayout'
import { navItems } from './navItems'

export const Reports = () => {
  return (
    <AuthLayout
      title="Reports"
      navItems={navItems}
    >
      This is the reports page.
    </AuthLayout>
  )
}
