import React from 'react';
import  {useHistory} from 'react-router-dom'

const Post = (props) => {
    const {id,title,body}=props.post
    const postSty={border:'1px solid red',backgroundColor:'cyan',margin:'10px',padding:'10px'}
    const history=useHistory();
    const showComments=id=>{
        const url=`post/${id}`;
        history.push(url)
    }
    return (
        <div style={postSty}>
            <h1>user id:{id}</h1>
            <h4>user title:{title}</h4>
            <h5>user body:{body}</h5>
            <button onClick={()=>showComments(id)}>show comment</button>
        </div>
    );
};

export default Post;