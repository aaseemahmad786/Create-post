import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
    const [posts, setPosts]= useState([
        {
        _id: "1",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu3-_TbUInL975rAfMjR83kQAjePhVRRJFfw&s",
        caption:"Beautiful",
        }
    ])
     useEffect(() => {
    axios.get("https://create-post-z6oa.onrender.com/posts")
        .then((response) => {
            setPosts(response.data.posts);
        })
}, [])

  return (
     <section className='flex flex-row gap-4  flex-wrap p-2'>{
        posts.length > 0 ? (
            posts.map((post)=>(
                 <div className='flex items-center justify-center flex-col '>
                    <div key={post._id} className='  border-4 w-80 border-gray-300 rounded-md p-4 mb-4  '>
                    <img src={post.image} alt={post.caption} className=' w-64 h-64 aspect-square object-cover' />
                    <p className='text-lg'>{post.caption}</p>
                </div>
                 </div>
            ))
        ) : (
            <p>No posts available</p>
        )
    }
     </section>
  )
}

export default Feed
