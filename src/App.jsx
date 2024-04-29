import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

const App = () => {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
 
  useEffect(() => {

    const getQuote = async () => {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const apiUrl = 'https://zenquotes.io/api/quotes/'

        const response = await fetch(proxyUrl + apiUrl)
        const data = await response.json()

        console.log(data)
        setQuote(data.q)
        setAuthor(data.a)

    };

    getQuote();
  }, []); // Empty dependency array to ensure useEffect runs only once on component moun

  return (
    <div>
      <Navbar/>
      <Hero quote={quote} author={author}/>
    </div>
  )
}

export default App