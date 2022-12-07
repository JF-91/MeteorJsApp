
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { RouterLayout } from './common/RouterLayout'
import { AboutPage } from './pages/about/index'
import { HomePage } from './pages/home/index'
import {ContactPage} from './pages/contact/index'

export const RouterApp = () => {
  return (
    <Routes>
        <Route path='/' element={<RouterLayout />} >
            <Route path='/' element={<HomePage />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='/contact' element={<ContactPage />}/>
        </Route>
    </Routes>
  )
}
