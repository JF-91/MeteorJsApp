import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBarApp } from './NavBarApp'

export const RouterLayout = () => {
  return (
    <div>
        <NavBarApp />
        <Outlet />
    </div>
  )
}
