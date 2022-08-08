import {Avatar} from "@material-ui/core"
 
function Story({title, profileSrc, image}) {
  return (
    <div style={{backgroundImage: `url(${image})` }} className='story'>
        <h4>{title}</h4>
        <Avatar src={profileSrc}/>
    </div>
  )
}

export default Story
