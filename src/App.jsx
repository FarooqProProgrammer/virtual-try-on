import React from 'react'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero'
import { Helmet } from 'react-helmet'
import About from './components/About'


const App = () => {
  return (
    <>
    <Helmet>
      <title>HYDRA | Virtual Try On</title>
    </Helmet>
    <BrowserRouter>
        <Header />
        <Hero />
        <About />
    </BrowserRouter>
    </>
  )
}

export default App
