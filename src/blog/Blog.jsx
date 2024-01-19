import React from 'react'
import Card from './Card'
import './blog.css'
import b1 from '../../../assets/b1.png'
import b2 from '../../../assets/b2.png'
import b3 from '../../../assets/b3.png'

import 'intersection-observer'
import { useEffect, useRef } from 'react'

export default function Blog() {
  const titleRef = useRef()


  useEffect(() => {
    const observateur = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        titleRef.current.classList.add("active")
      }

      observateur.observe(titleRef.current)

      return () => {
        observateur.unobserve(titleRef.current)
      }
    })


  }, [])
  return (
    <div id='blog' className='blog'>
      <h1 ref={titleRef} className='blog-h1' style={{ color: "rgb(255, 191, 0)" }}>Blog</h1>

      <div className="card-container">
        <Card className='card-1' image={b1} title="Master These Awesome" />
        <Card className='card-2' image={b2} title="Best Design Items to Appeal" />
        <Card className='card-3' image={b3} title="The 20 Best Lightroom " />
      </div>



    </div>
  )
}
