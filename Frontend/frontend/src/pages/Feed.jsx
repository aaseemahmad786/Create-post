import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu3-_TbUInL975rAfMjR83kQAjePhVRRJFfw&s",
            caption: "Beautiful",
        }
    ])

    useEffect(() => {
        axios.get("https://create-post-z6oa.onrender.com/posts")
            .then((response) => {
                setPosts(response.data.posts);
            })
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-10">
            <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                📸 Feed
            </h1>

            {posts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {posts.map((post) => (
                        <div
                            key={post._id}
                            className="group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-white/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Post Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.caption}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Caption */}
                            <div className="p-4">
                                <p className="text-gray-800 font-medium text-sm truncate">{post.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center mt-24 text-center gap-4">
                    <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-gray-500 text-lg font-medium">No posts yet</p>
                    <p className="text-gray-400 text-sm">Be the first to share something!</p>
                </div>
            )}
        </div>
    )
}

export default Feed
