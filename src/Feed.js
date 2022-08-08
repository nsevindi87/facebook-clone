import React from 'react'
import StoryReel from './StoryReel';
import './Feed.css';
import MessageSender from './MessageSender';

function Feed() {
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />
        
    </div>
  )
}

export default Feed

