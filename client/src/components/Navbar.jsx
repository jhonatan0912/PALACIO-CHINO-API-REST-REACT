import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1>Palacio Chino Premium</h1>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/new'}>Add product</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar