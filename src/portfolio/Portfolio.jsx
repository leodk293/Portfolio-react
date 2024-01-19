import React from 'react'
import { useState } from 'react'
import './portfolio.css'
import port1 from '../../../assets/port1.jpg'
import port2 from '../../../assets/port2.jpg'
import port3 from '../../../assets/port3.jpg'
import port4 from '../../../assets/port4.jpg'
import port5 from '../../../assets/port5.jpg'
import port6 from '../../../assets/port6.jpg'

export default function Portfolio() {
    const [category, setCategory] = useState(0)
    let content;

    // if(category === 0){
    //     content = <div>
    //         <img src={port1} alt="" />
    //         <img src={port2} alt="" />
    //         <img src={port3} alt="" />
    //         <img src={port4} alt="" />
    //         <img src={port5} alt="" />
    //         <img src={port5} alt="" />
    //     </div>
    // }

    // esle

    switch (category) {
        case 0: content = <div className='grid-category'>
            <img src={port1} alt="" />
            <img src={port2} alt="" />
            <img src={port3} alt="" />
            <img src={port4} alt="" />
            <img src={port5} alt="" />
            <img src={port6} alt="" />

        </div>; break;

        case 1: content = <div className='grid-category'>
            <img src={port1} alt="" />
            <img src={port4} alt="" />
        </div>; break;

        case 2: content = <div className='grid-category'>
            <img src={port2} alt="" />
            <img src={port5} alt="" />

        </div>; break;

        case 3: content = <div className='grid-category'>
            <img src={port3} alt="" />
            <img src={port6} alt="" />

        </div>;


    }

    return (
        <div id='portfolio' className='portfolio'>
            <h1>Portfolio</h1>

            <div className="categories">
                <div className="category-btns">
                    <button onClick={() => setCategory(0)}>All</button>
                    <button onClick={() => setCategory(1)}>Marketing</button>
                    <button onClick={() => setCategory(2)}>Design</button>
                    <button onClick={() => setCategory(3)}>Development</button>
                </div>

                {content}


            </div>

        </div>
    )
}
