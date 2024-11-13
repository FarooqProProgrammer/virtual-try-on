import React from 'react'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero'
import { Helmet } from 'react-helmet'
import About from './components/About'
import ContentSection from './components/ContentSection'


const App = () => {
  return (
    <>
    <Helmet>
      <title>HYDRA | Virtual Try On</title>
    </Helmet>
    <BrowserRouter>
        <Header />
        <Hero />
        <ContentSection title={'Introduction to Hydra Vr'} description={'Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo  quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare  lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.'} />
        {/* <About /> */}
    </BrowserRouter>
    </>
  )
}

export default App
