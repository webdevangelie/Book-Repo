import React from 'react'

const Hero = ({quote, author}) => {
  return (
    <section className="bg-orange-700 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <p className="my-4 text-xl text-white">
            {quote}
          </p> <span>{author}</span>
        </div>
      </div>
    </section>
  )
}

export default Hero