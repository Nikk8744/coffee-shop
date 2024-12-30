import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import About from './Pages/About'
import Contact from './Pages/Contact'
import CoffeeDetail from './Pages/CoffeeDetail'
import Gallery from './Pages/Gallery'


function App() {

  return (
    <div className='bg-[#46644633]'>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/coffee/:id" element={<CoffeeDetail />} />
            <Route path="/gallery" element={<Gallery/>} />
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default App

