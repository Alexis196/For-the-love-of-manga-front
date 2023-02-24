import React from 'react'
import './layout-header.css'
import Navbar from '../../components/Navbar/Navbar'
import DivFondo from '../../components/DivFondos/DivFondo'

export default function LayoutMain() {
    return (
    <div className='fondo'>
        <Navbar/>
        <DivFondo/>
    </div>
)
}
