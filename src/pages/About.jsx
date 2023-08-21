import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate();
  return (
    <div className='container'>
      <h3>About</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae nisi natus fugit nemo voluptatum repellat, placeat ullam saepe hic animi adipisci repudiandae nesciunt repellendus? Magnam tempora eaque minima rerum est?</p>

      <button onClick={()=> navigate('/')}>back to home</button>
    </div>
  )
}
