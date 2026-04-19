import React from 'react'
import './header.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from    'react-icons/fa'
import {FaTwitter} from    'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/ahmed-amine-bouricha-0227a0209/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/ahmedamine12" target="_blank" rel="noopener noreferrer"> <FaGithub/></a>
      <a href="https://twitter.com/BourichaA1" target="_blank" rel="noopener noreferrer"> <FaTwitter/></a>
    </div>
  )
}

export default HeaderSocials