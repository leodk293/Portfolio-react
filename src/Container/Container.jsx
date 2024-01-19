import './container.css'
import 'intersection-observer'
import React from 'react'
import Portfolio from '../portfolio/portfolio'
import Blog from '../blog/Blog'
import Forms from '../form/Forms'
import Footer from '../footer/Footer'
import { useRef, useEffect } from 'react'

import icon1 from '../../../assets/chart-simple-solid.svg'
import icon2 from '../../../assets/plus-solid.svg'
import icon3 from '../../../assets/inbox-solid.svg'
import icon4 from '../../../assets/code-solid.svg'
import icon5 from '../../../assets/pen-nib-solid.svg'
import icon6 from '../../../assets/gear-solid.svg'

import man from '../../../assets/man.png'
import { useTypewriter, Cursor } from "react-simple-typewriter"
import ServicesDesign from './ServicesDesign'
export default function Container() {

    

    const [text] = useTypewriter({
        words: [" John Doe", " Web Designer ", " Web Developer !!!"],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80
    })

    // useEffect(()=>{
    //     const observateur = new IntersectionObserver(entries=>{
    //       console.log(entries)
          
    //     })
    
        
    //     return ()=> {
          
    //     }
    //   },[])

    return (
        <div className="global-container">
            <div className='intro'>

                <h1 style={{ fontSize: "20px", color: "#fff" }}>Hello I am <br />
                    <span>
                        {text}
                    </span>

                    <span>
                        <Cursor />
                    </span>
                </h1>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>

                <button>Downoald CV</button>

            </div>

            <section id='about' className="about">
                <div className="photo">
                    <img src={man} alt="MAN" />

                    <div className="description">
                        <h1>About</h1>

                        <div className="text">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur
                            </p>
                            <p>magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                                ipsum quia dolor si voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                consequuntur
                            </p>

                            <div className="btns">
                                <button>Downoload CV</button>
                                <button>Downoload CV</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div id='services' className="services">
                    <h1>Services</h1>

                    <div className="grid-services">
                        <ServicesDesign icon={icon1} title='Creative Design' />
                        <ServicesDesign icon={icon2} title='Clean Code' />
                        <ServicesDesign icon={icon3} title='Responsive Design' />
                        <ServicesDesign icon={icon4} title='Material UI' />
                        <ServicesDesign icon={icon5} title='Material UI Icons' />
                        <ServicesDesign icon={icon6} title='Awesome Support' />
                    </div>

                </div>
            </section>

            <section className="features">
                <div>
                    <h1>89</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
                <div>
                    <h1>231</h1>
                    <p>OBJECTS COMPLETED</p>
                </div>
                <div>
                    <h1>108</h1>
                    <p>FILES DOWNLOADED</p>
                </div>
                <div>
                    <h1>1446</h1>
                    <p>LINKS OF CODE</p>
                </div>
            </section>

            <div className="components-container">
                <Portfolio />

                <Blog />

                <Forms />
            </div>

            <Footer />


        </div>
    )
}
