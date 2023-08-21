import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to='about'>About</NavLink>
            </li>
            <li>
                <NavLink to='contact'>Contact</NavLink>
            </li>
            <li>
                <NavLink to='blogs'>Blogs</NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}
