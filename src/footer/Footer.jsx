import React from 'react'
import './footer.css'
import X from '../../../assets/X.svg'
import insta from '../../../assets/square-instagram.svg'
import youtube from '../../../assets/youtube.svg'
import facebbok from '../../../assets/facebook (2).svg'

export default function Footer() {
  return (
    <footer>
        <div className="social-medias">
            <img src={X} alt="" />
            <img src={insta} alt="" />
            <img src={youtube} alt="" />
            <img src={facebbok} alt="" />
        </div>

        <p>All Right Resceved 2018</p>
    </footer>
  )
}
