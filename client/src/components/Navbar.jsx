import React from 'react'
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ButtonLogin from "./Auth/ButtonLogin";
import ButtonLogOut from "./Auth/ButtonLogOut";

function Navbar() {
  const { user, isAuthenticated } = useAuth0()
  return (
    <div className='bg-zinc-800 text-white'>
      <h1 className='text-3xl text-center pt-4'>Palacio Chino Premium</h1>
      <ul className='flex flex-col lg:flex-row lg:justify-between'>
        {
          isAuthenticated &&
          <div className='flex'>
            <li className='w-full lg:w-40 text-center p-2 hover:font-bold text-xl'>
              <Link to={'/'}>Home</Link>
            </li>
            <li className='w-full lg:w-40 text-center p-2 hover:font-bold text-xl'>
              <Link to={'/new'}>Add product</Link>
            </li>
          </div>
        }
        <li className='lg:flex items-center gap-3 lg:pr-3 text-center'>
          {isAuthenticated && <p>Bienvenido {user.name}</p>}
          {
            isAuthenticated ? <ButtonLogOut /> : <ButtonLogin />
          }
        </li>
      </ul>
    </div>
  )
}

export default Navbar