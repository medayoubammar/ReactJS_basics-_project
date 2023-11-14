import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
 
  return (
  

    
    <div className='text-center bg-dark d-flex
    justify-content-around  p-2 mb-1'>
<Link className='text-light' to="/">Home</Link>
<Link className='text-light' to="/movies">Movies</Link>

    </div>


  )
}
