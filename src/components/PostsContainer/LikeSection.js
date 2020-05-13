// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'

const LikeSection = props => {
  const {likes, setLikes, likesDisplayed, setLikesDisplayed} = props
  // const[likeDisplay, setLikeDisplay]= useState(' ')
  //console.log(props)

  const showLikes = event => {
    
  return setLikesDisplayed(`likes :${likes}`)
   
  }

  const addLikes = event => {
    setLikes(likes + 1)
  }

  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div className="like-section-wrapper"  onMouseEnter={showLikes}>
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
  <p className="like-number" onClick={addLikes}> {likesDisplayed} </p>
    </div>
  )
};

export default LikeSection;
