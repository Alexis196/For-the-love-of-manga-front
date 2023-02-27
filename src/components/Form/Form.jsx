import React from 'react'
import { useRef } from 'react'
import axios from 'axios'
import './form.css'

export default function Form() {
    let google = <img src='./img/google.svg' alt='icon-google' />
    let people = <img className='icon' src='./img/profile.svg' alt='icon-profile' />
    let lock = <img className='icon' src='./img/lock1.svg' alt='icon-lock' />
    let arr = <img className='icon' src='./img/arr.svg' alt='arroba' />

    let name = useRef()
    let email = useRef()
    let password = useRef()
    let cPassword = useRef()
    let notif = useRef()

    async function handleSubmit(event) {
        event.preventDefault()
        let data = {
            [name.current.name]: name.current.value,
            [email.current.name]: email.current.value,
            [password.current.name]: password.current.value,
            [cPassword.current.name]: cPassword.current.value,
            [notif.current.name] : notif.current.checked
        }
        console.log(data)
        let url = 'http://localhost:8080/users'
        if (password.current.value === cPassword.current.value) {
            try {
                await axios.post(
                    url, data
                )
            } catch (error) {
                console.log(error)
                console.log('ocurrió un error')
            }
            event.target.reset()
        } else {
            alert("Passwords do not match")
        }
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <fieldset>
                <legend>Name</legend>
                <input type="text" name="name" id="name" ref={name} required />
                {people}
            </fieldset>
            <fieldset>
                <legend>Email</legend>
                <input type="email" name="mail" id="mail" ref={email} required />
                {arr}
            </fieldset>
            <fieldset>
                <legend>Password</legend>
                <input type="password" name="password" id="password" ref={password} required />
                {lock}
            </fieldset>
            <fieldset>
                <legend>Confirm Password</legend>
                <input
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    ref={cPassword}
                    required
                />
                {lock}
            </fieldset>
            <div className='check'>
                <input className='accept-ch' type="checkbox" id="notif" name='notif' ref={notif} />
                <label className='accept' htmlFor="notif">Send notification to my email</label>
            </div>
            <button type="submit" className='btn-sign' >Sign up</button>
            <button className='btn-google' > {google} Sign in with Google</button>
        </form>
    )
}
