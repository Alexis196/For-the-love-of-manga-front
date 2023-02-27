import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

export default function IndexLayout(props){
    return (
    <div>
        <Navbar/>
        {props.children}
    </div>
)
}
