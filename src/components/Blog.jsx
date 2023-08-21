import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blogs } from '../datas/BlogsData';

export default function Blog() {
    const {title} =useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    useEffect(()=>{
       const blogData = blogs.filter((blog)=> blog.title == title );
       setBlog(blogData);
    }, [])
  return (
    <div>
      <article className='blog-container'>
        <h3>{ blog && blog[0].title }</h3>
        <p>{ blog && blog[0].description }</p>
        <button onClick={()=> navigate('/blogs')}>Black to blogs list</button>
      </article>
    </div>
  )
}
