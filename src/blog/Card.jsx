import React from 'react'
import './blog.css'
import { useRef, useEffect } from 'react'
import 'intersection-observer'

export default function Card({ title, image }) {
    const card = useRef()

    useEffect(()=>{
        const observer = new IntersectionObserver(entries=>{
            if(entries[0].isIntersecting){
                card.current.classList.add("active")
            }

            observer.observe(card.current)

            return ()=>{
                observer.unobserve(card.current)
            }
        })
    },[])
  
    return (
        <div ref={card} style={{backgroundColor:"transparent",borderColor:"transparent"}} className='card'>
            <img src={image} alt="" />

            <div className="body">
                <p>{title}</p>
                <p style={{color:"rgb(255, 191, 0)"}}>By Dorian Gray Jun 27, 2022</p>
                <p style={{color:"#f1f1f1"}}>Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry.
                    Lorem Ipsum has been
                </p>
            </div>

        </div>
    )
}

