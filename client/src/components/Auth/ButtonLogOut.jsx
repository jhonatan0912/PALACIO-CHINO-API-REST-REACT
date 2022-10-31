import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

function ButtonLogOut() {
  const { logout } = useAuth0()
  return (
    <button
      onClick={() => logout()}
      className='w-full lg:w-40 text-center p-2 hover:font-bold text-xl bg-red-500 rounded lg:py-1 lg:px-1'
    >Log out</button>
  )
}

export default ButtonLogOut