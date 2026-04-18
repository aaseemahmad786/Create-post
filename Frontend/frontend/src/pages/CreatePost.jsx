import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const CreatePost = () => {
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        axios.post("http://localhost:3000/create-post", formData )
            .then((response)=>{
                alert("post  created successfully")
                e.target.reset();
                navigate("/feed")
    })
          .catch((error)=>{
            console.log(error)
                        alert("Error creating post")
          })
        }

    return (
        <section className='max-w-md mx-auto mt-10 p-4 bg-amber-200'>
            <h1 className='text-3xl font-black items-center justify-between p-3'> Create Post</h1>
            
            <div>
                <form onSubmit={handleSubmit}>
                <input type="file" name="image" className='p-3 border-4 rounded-3xl' accept="image/*" />
                 <div className=' flex p-2 items-center justify-center'>

                    <input type="text" name="caption" className='p-3  border-4 rounded-full ' placeholder="Enter Caption" required />
                 </div>
 <div className='flex p-2 items-center justify-center'>                  <button type='submit' className='bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600'>Submit</button>

    </div>           
     </form>
            </div>
        </section>
    )
}

export default CreatePost