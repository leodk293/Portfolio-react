import React from 'react'
import "./container.css"

export default function ServicesDesign({icon,title}) {
    return (
        <div className='prop-serices'>
            <img src={icon} alt="" />
            <p style={{color:"grey"}}>{title}</p>
            <p style={{color:"#f1f1f1"}}>Lorem Ipsum simply text of the printing and type
                setting industry when an unknown printing simply
            </p>
        </div>
    )
}
