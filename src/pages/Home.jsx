import React from 'react'
import { MainLayout } from '../templates/MainLayout'
import { navItems } from './navItems'

export const Home = () => {
  return (
    <MainLayout
      title="Productivity 10x"
      navItems={navItems}
    >
      This is the home page.  You should not see this if you are logged in.
    </MainLayout>
  )
}
