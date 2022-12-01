import React from 'react'
import './footer.css'
import {GrInstagram} from 'react-icons/gr'
import {BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'


const Footer = () => {

  return (
    <footer>
      <a href="#" className='footer__logo'>PORTFOLIO</a>

<ul className='permalinks'>
  <li><a href="#">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#portfolio">Projects</a></li>
  <li><a href="contact">Contact</a></li>
</ul>

<div className='footer__socials'>
  <a href="https://www.facebook.com/amine.bouricha.73/" target="__blank"> <FaFacebookF/></a>
   <a href="https://instagram.com" target="__blank"><GrInstagram/></a>
   <a href="https://twitter.com/BourichaA1" target="__blank"><BsTwitter/></a>
</div>
<div className='footer__copyright'>
<small>&copy; Bouricha Porfoliio. All rights reserved</small>
</div>
    </footer>
  )
}

export default Footer