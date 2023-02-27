import React from 'react'
import './section-form.css'
import Form from '../Form/Form'
import ImgForm from '../ImgForm/ImgForm'

export default function SectionForm() {
    let logo = <img className='logo3' src='./img/Logo3.svg' alt='Logo' />
    return (
        <div className='section-form'>
            <div className='content'>
                <div className='cont-textos'>
                    {logo}
                    <h1>Welcome!</h1>
                    <p className='parrafo'>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
                </div>
                <Form />
                <div className='cont-info'>
                    <p>Already have an account? <span className='span'>Log in</span> </p>
                    <p>Go back to <span className='span'> home page</span></p>
                </div>
            </div>
        </div>
    )
}
