import React, { Component } from 'react';
import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'
import Coment from '../Coment/Coment';

const PostDetail = () => {
    const {id}=useParams();
    const [post,setPost]=useState({});
    useEffect(() => {
const url=`https://jsonplaceholder.typicode.com/posts/${id}`
fetch(url)
.then(res=>res.json())
.then(data=>setPost(data))
    },[id])

const [comments,setComments]=useState([])
    useEffect(() => {
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComments(data))
            },[id])
    return (
        <div>
            <h1>this is post detail {post.id}</h1>
            <p>user post id: {post.id}</p>
            <p>user post title: {post.title}</p>
            <p>user post body: {post.body}</p>
    {
        comments.map(comment =><Coment comment={comment}></Coment>)
    }
            
        </div>
    );
};

export default PostDetail;