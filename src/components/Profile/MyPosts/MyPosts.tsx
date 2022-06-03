import React , {useRef} from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostDataPropsType} from "./Post/MyPostsContainer";
import {AddPostFormRedux , AddPostFormType} from "./Post/AddPostFormRedux";


type MyPostsPropsType = {
    posts: Array<PostDataPropsType>
    addPost:(newPostBody:string)=> void
}

const MyPosts = (props:MyPostsPropsType) => {

  const postsElements = props.posts.map(message =>{
      return(
          <Post message={message.message} likeAmount={message.likeAmount}/>
      )
  })
    const addNewPost = (addPostData:AddPostFormType) => {
            props.addPost(addPostData.newPostBody);

    }

    return (
        <div>
            <div className={styles.newPost}>
                New post
                <AddPostFormRedux onSubmit = {addNewPost}/>
            </div>
            <div>
                My posts:
            </div>
            <div className={ styles.posts }>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;


