import React from 'react'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero'

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Hero />
    </BrowserRouter>
  )
}

export default App
