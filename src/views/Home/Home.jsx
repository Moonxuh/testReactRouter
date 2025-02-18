import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <h1>
          Home<span>!</span>
        </h1>
      </div>
  
      <button>
        <Link to={`/products/1`}>Produto</Link>
      </button>

      <button>
        Testando Main-Button
      </button>
    </div>
  )
}

export default Home