import "./Post.css";
import { Avatar } from "@material-ui/core";

function Post({profilePic, image, userName, timestamp, message}) {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profilePic} className="post_avatar"/>
        <div className="post_topInfo">
            <h3>{userName}</h3>
            <p>Timestamp...</p>
        </div>

        <div className="post_bottom">
            <p>{message}</p>
        </div>
        <div className="post_image">
            <img src={image} alt="" />
        </div>
      </div>
      








    </div>
  )
}

export default Post
