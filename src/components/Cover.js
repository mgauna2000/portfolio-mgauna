import React from 'react'
import "../styles/Cover.css"
import coverVideo from '../img/coverVideo.mp4'

const Cover = () => {
    return (
        <div className='cover-container'>
            <video className='video' src={coverVideo} autoPlay loop muted />
            <h1>Martin Gauna</h1>
            <p>Junior Programmer | Front-end Developer</p>
        </div>
    )
}

export default Cover
