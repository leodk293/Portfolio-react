import './navBar.css'
import logo from '../../../assets/favicon.png'
import hamburger from '../../../assets/icon-hamburger.svg'
import close from '../../../assets/icon-close.svg'
import 'intersection-observer'
import { useState, useRef, useEffect } from 'react'

export default function NavBar() {
  const navRef = useRef()
  const navOvserver = useRef()

  useEffect(()=>{
    const observateur = new IntersectionObserver(entries=>{
      console.log(entries)
      if(entries[0].isIntersecting){
        navOvserver.current.classList.add("active")
      }
    })

    observateur.observe(navOvserver.current)
    return ()=> {
      observateur.unobserve(navOvserver.current)
    }
  },[])

  

  const [showNavBar, setShowNavBar] = useState(false)



  function displayNavBar() {
    setShowNavBar(!showNavBar)

    if (showNavBar) {
      navRef.current.classList.add("hidden")
    }
    else {
      navRef.current.classList.remove("hidden")

    }

  }

  //console.log(navRef)


  return (
    <div className="global-container">

      <div id='home' ref={navOvserver} className='desktop-navBar'>
        <img src={logo} alt="LOGO" />
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </div>

      <div className="mobile-navBar">

        <div className="links">
          <img src={logo} alt="" />
          <button onClick={displayNavBar}>
            <img src={showNavBar ? close : hamburger} alt="" />
          </button>
        </div>

        <ul ref={navRef}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>

    </div >

  )
}
