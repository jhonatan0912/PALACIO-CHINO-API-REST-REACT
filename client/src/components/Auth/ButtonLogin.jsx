import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

function ButtonLogin() {
  const { loginWithPopup } = useAuth0();
  return (
    <button
      onClick={() => loginWithPopup()}
      className='w-full lg:w-40 text-center p-2 hover:font-bold text-xl'
    >Login</button>
  )
}

export default ButtonLogin