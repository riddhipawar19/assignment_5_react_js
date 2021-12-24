import React, { useState } from 'react'
import './StartPost.css'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import axios from 'axios'

function StartPost() {

    const [content, setcontent] = useState("")

    const post_data = {
        "content":content
    }

    const add_post = (e) =>{
        e.preventDefault()
        console.log(content);
        setcontent("")
        axios.post("http://localhost:5000/add_post",post_data)
        .then(() =>{
            document.location.reload()
        })
    }

    return (
        <div className='startpost'>

            <form className='startpost__top' onSubmit={e =>add_post(e)}>
                <AccountCircleRoundedIcon className="icons profile__icon"/>
                <input placeholder='Start a post' value={content} onChange={e => setcontent(e.target.value)}></input>
            </form>

            <div className='startpost__bottom'>
                <div className='element'>
                    <InsertPhotoOutlinedIcon className="startpost__icons"/>
                    <p>Photo</p>
                </div>
                <div className='element'>
                    <OndemandVideoOutlinedIcon className="startpost__icons"/>
                    <p>Video</p>
                </div>
                <div className='element'>
                    <BusinessCenterOutlinedIcon className="startpost__icons"/>
                    <p>Jobs</p>
                </div>
                <div className='element'>
                    <FeedOutlinedIcon className="startpost__icons"/>
                    <p>Write article</p>
                </div>
            </div>

        </div>
    )
}

export default StartPost
