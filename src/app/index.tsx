/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import '../styles/global.css'
import '../styles/antd.css'

import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NotFoundPage } from './components/NotFoundPage/Loadable'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
