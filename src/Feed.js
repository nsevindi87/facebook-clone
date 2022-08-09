import React, { useEffect, useState } from 'react'
import StoryReel from './StoryReel';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from "./Post";
import profilePic1 from "./img/profile 1.jpeg";
import image1 from './img/Download (1).jpeg'
import profilePic2 from "./img/profile 2.jpeg";
import db from './firebase'

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    db.collection('posts').onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map(doc=>({id: doc.id, data: doc.data()})))
    )
  }, []);

  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />

        {posts.map(post=>(
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
            />
        ))}
    </div>
  )
}

export default Feed

