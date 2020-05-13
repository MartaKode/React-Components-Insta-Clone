// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const {comments} =props
const [currentComment, setCurrentComment] = useState('')


  return (
    <div>
      {/* map through the comments data and return the Comment component */}
    
    {comments.map( commentObj => {
     // console.log(commentObj)
      return <Comment key={commentObj.text} comment = {commentObj}/> 
    })}


      <CommentInput />
    </div>
  );
};

export default CommentSection;
