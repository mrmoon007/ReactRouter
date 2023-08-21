import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
    const navigate = useNavigate();
  return (
    <div className='container'>
      <h3>Contact</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ipsum accusantium repellendus nesciunt atque doloremque inventore pariatur nam eum at debitis dolore voluptatum eius recusandae non, architecto vitae minus repellat?</p>

      <button onClick={()=> navigate('/')}>back to home</button>
    </div>
  )
}
