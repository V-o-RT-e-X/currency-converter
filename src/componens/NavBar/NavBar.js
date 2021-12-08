import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

  return (
    <div className="nav">
      <NavLink to="/" className={"currency1"}>Конвертер</NavLink>
      <NavLink to="/currency" className={"currency2"}>Курс валют</NavLink>
    </div>
  )
}
export default NavBar