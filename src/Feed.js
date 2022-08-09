import React from 'react'
import StoryReel from './StoryReel';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from "./Post";
import profilePic1 from "./img/profile 1.jpeg";
import image1 from './img/Download (1).jpeg'
import profilePic2 from "./img/profile 2.jpeg";
import image2 from './img/Download (2).jpeg'

function Feed() {
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />

        <Post profilePic={profilePic1}
              message = "wow it works"
              timestamp="This is timestamp"
              userName="George Orwel"
              image = {image1}
        />
        <Post profilePic={profilePic2}
              message = "wow it works too"
              timestamp="This is timestamp"
              userName="Thomas Edison"
        />
    </div>
  )
}

export default Feed

