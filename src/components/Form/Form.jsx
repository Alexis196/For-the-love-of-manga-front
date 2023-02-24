import React from 'react'
import './form.css'

export default function Form() {
    let google = <img src='./img/google.svg' alt='icon-google' />
    let people = <img className='icon' src='./img/profile.svg' alt='icon-profile' />
    let lock = <img className='icon' src='./img/lock1.svg' alt='icon-lock' />
    return (
        <form className='form' action="">
            <fieldset>
                <legend>Name</legend>
                <label htmlFor=""></label>
                <input type="text" />
                {people}
            </fieldset>
            <fieldset>
                <legend>Email</legend>
                <label htmlFor=""></label>
                <input type="email" />
                <span className='icon'>@</span>
            </fieldset>
            <fieldset>
                <legend>Password</legend>
                <label htmlFor=""></label>
                <input type="password" />
                {lock}
            </fieldset>
            <fieldset>
                <legend>Confirm Password</legend>
                <label htmlFor=""></label>
                <input type="password" />
                {lock}
            </fieldset>
            <div className='check'>
                <input className='accept-ch' type="checkbox" id="accept" />
                <label className='accept' htmlFor="accept">Send notification to my email</label>
            </div>
            <button className='btn-sign' >Sign up</button>
            <button className='btn-google' > {google} Sign in with Google</button>
        </form>
    )
}
