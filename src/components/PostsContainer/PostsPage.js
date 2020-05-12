//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
 import data from "../../dummy-data.js";
//console.log(data)


const PostsPage = () => {
  // set up state for your data
  const [usersData , setUsersData] = useState(data)
//console.log(usersData[0].comments[1])

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}

      {usersData.map((userObj) => {
        console.log(userObj)
        return <Post key={userObj.username} post={userObj}/>
      })}
    
    </div>
  );
};

export default PostsPage;
