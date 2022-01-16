import React from 'react'
import '../styles/About.css'
import aboutImg from '../img/about.jpg'

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-desc'>
                <h1>Poner la descripcion aqui</h1>
                <p>sfdfssadmjnhbgvvyvsydgjkvssññlllkjklñpolkiopñlkjukoljikujolkihdbfslfhlfbas</p>
            </div>
            <div className='about-img'>
                <img src={aboutImg} alt='about' />
            </div>
        </div>
    )
}

export default About
