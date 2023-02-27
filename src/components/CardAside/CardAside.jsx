import React from 'react'
import './card-aside.css'

export default function CardAside() {
    let imgLuffy = <img className='img-luffy' src='./img/img-luffy.png' alt='card'/>
    let img = <img className='img-nami' src='./img/nami.png' alt='nami'/>
    return (
        <div className='card-aside'>
            {img}
            {imgLuffy}
            <div className='text-card'>
                <p className='text-one'>One Piece</p>
                <p className='manga'>Manga</p>
                <p className='description'>Monkey D. Luffy refuses to let anyone stand in his way to become King of the Pirates. He launches into the seas and will become a captain willing to never give up until he gets hold of the greatest treasure in history: the legendary One Piece.</p>
            </div>
        </div>

)
}
