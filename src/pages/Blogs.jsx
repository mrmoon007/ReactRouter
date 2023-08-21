import React, { useState } from 'react'
import {blogs} from '../datas/BlogsData'
import { Link } from 'react-router-dom';

export default function Blogs() {
    const [blogs2 ,setBlogs] = useState(blogs);
    const trimString =(str, lenght)=>{
        return str.slice(0, lenght);
    }
  return (
    <div className='blogs-container'>
      {
        blogs2.map((blog)=> {
            const {id, title, description} = blog;
            return (
                <article className='card' key={id}>
                    <h3 className='card-title'>{ title }</h3>
                    <p className='card-description'> { trimString(description, 100) }</p>
                    <Link to={title} >Read more</Link>
                </article>
            )
        })
      }
    </div>
  )
}
