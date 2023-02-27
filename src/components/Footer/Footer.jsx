import React from 'react'
import './footer.css'

export default function Footer() {
    let imgFoot = <img className='img-footer' src='./img/img-foot.png' alt='footer' />
    let logo = <img className='logo-foot' src='./img/logo3.svg' alt='logo' />
    let face = <img src='./img/Facebook.svg' alt='logo-face' />
    let twitter = <img src='./img/Twitter.svg' alt='twitter-logo' />
    let union = <img src='./img/Union.svg' alt='union-logo' />
    let you = <img src='./img/Youtube.svg' alt='youtube-logo' />
    let vimeo = <img src='./img/Vimeo.svg' alt='Vimeo-logo' />

    return (
        <div className='footer'>
            <div className='Img-box'>
                {imgFoot}
                <div className='text-foot'>
                    <p>Subscribe</p>
                    <div className='register-foot'>
                        <input type="text" placeholder='Enter your email' />
                        <button>Subscribe Now</button>
                    </div>
                </div>
            </div>
            <div className='foot-final'>
                <div className='links'>
                    <a href="#">Home</a>
                    <a href="#">Manga</a>
                </div>
                {logo}
                <div className='btn-f'>
                    <div className='icon-f'>
                        {face}
                        {twitter}
                        {vimeo}
                        {you}
                    </div>
                    <button>Donate {union}</button>
                </div>
            </div>
        </div>
    )
}