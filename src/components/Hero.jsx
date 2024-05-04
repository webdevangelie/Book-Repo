import React from 'react'
import quotes from '../quotes.json'

const Hero = () => {
  console.log(quotes)
  
  return (
    <section className="bg-orange-700 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <p className="my-4 text-xl text-white">
            test
          </p> <span>test</span>
        </div>
      </div>
    </section>
  )
}

export default Hero