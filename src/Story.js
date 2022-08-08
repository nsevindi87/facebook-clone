import {Avatar} from "@material-ui/core";
import "./Story.css"
 
function Story({title, profileSrc, image}) {
  return (
    <div style={{backgroundImage: `url(${image})` }} className='story'>
        <h4>{title}</h4>
        <Avatar className="story_avatar" src={profileSrc}/>
    </div>
  )
}

export default Story
