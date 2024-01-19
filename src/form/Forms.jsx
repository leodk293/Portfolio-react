import React from 'react'
import './form.css'
export default function Forms() {
    return (
        <div id='contact' className='form-layout'>
            <form action="">
                <div className="data">
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                </div>

                <textarea style={{height:"60px"}} name="" id="" cols="30" rows="10" placeholder='Subject'></textarea>

                <textarea name="" id="" cols="30" rows="10"></textarea>

                <button>Submit</button>
            </form>

            <div className="infos">

                <div className="locations">
                    <p>2651 Main Street, Suit 124</p>
                    <p>Seattle, WA, 98101</p>
                </div>

                <div className="contacts">
                    <p>0123456789</p>
                    <p>0345627891</p>
                </div>

                <div className="mails">
                    <p>hello@thetheme.io</p>
                    <p>info@brex-theme.io</p>

                </div>

            </div>
        </div>
    )
}
