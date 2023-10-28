import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className=' flex justify-between bg-gray-700 text-white w-full h-16 items-center'>
        <NavLink to="/" className=" m-20">
            Agregar Empleados
        </NavLink>
        <ul className='flex gap-10 m-20'>
            <li className=''> 
                <NavLink to="/">
                    Home
                </NavLink>
            </li>
            <li className=''>
                <NavLink to="/list">
                    Lista de Empleados
                </NavLink>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
