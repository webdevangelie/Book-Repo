import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HomeCards from './components/HomeCards'
import QuoteList from './components/QuoteList'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <HomeCards />
      <QuoteList />

    </div>
  )
}

export default App