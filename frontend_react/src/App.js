import React from 'react';
import "./App.css"
import { Navbar } from './components';
import { About, Footer, Header, Skills, Work } from './container';

function App() {
  return (
    <div className='app'>
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        {/* <Testimonial/> */}
        <Footer/>
    </div>
  )
}

export default App;