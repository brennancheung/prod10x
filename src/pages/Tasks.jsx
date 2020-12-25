import React from 'react'
import { AuthLayout } from '../templates/AuthLayout'
import { navItems } from './navItems'

export const Tasks = () => {
  return (
    <AuthLayout
      title="Tasks"
      navItems={navItems}
    >
      This is the tasks page.
    </AuthLayout>
  )
}
