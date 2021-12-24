import React, { useEffect, useState } from 'react'
import './Posts.css'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import { IconButton } from '@mui/material';

function Posts() {

    const [posts, setposts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/get_posts")
        .then(result =>{
            setposts(result.data)
        })
    }, [])

    const delete_post = (id) =>{
        axios.delete(`http://localhost:5000/delete_post${id}`)
        document.location.reload()
    }

    return (
        <>
        {posts.map(post => (
            <div className='posts'>
            <div className='posts__name'>
                <AccountCircleRoundedIcon className='profile__icon'/>
                <p>Riddhi Pawar</p>
                <DeleteIcon  onClick={()=>delete_post(post._id)} id="delete__icon"/>
            </div>
            <hr></hr>
            <div className='posts__content'>
                <p>{post.content}</p>
            </div>
            <div className='posts__date'>
                <p>{post.date}</p>
            </div>
            </div>
        ))}
        </>
    )
}

export default Posts
