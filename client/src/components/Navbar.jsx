import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='bg-zinc-800 text-white'>
      <h1 className='text-3xl text-center pt-4'>Palacio Chino Premium</h1>
      <ul className='flex flex-col lg:flex-row'>
        <li className='w-full lg:w-40 text-center p-2 hover:font-bold text-xl'>
          <Link to={'/'}>Home</Link>
        </li>
        <li className='w-full lg:w-40 text-center p-2 hover:font-bold text-xl'>
          <Link to={'/new'}>Add product</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar