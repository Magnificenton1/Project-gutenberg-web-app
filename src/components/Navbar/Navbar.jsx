import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    // jest tutaj funkcja do otwierania menu jak szerokość będzie za mała
  return (
    <nav> 
        <Link to="/" className='title'>ProjectGutenbergApp</Link>
        <div className='menu' onClick={() => {
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/saved">Saved</NavLink>
            </li>
            <li>
                <NavLink to="/booksearch">Advanced Searchbar</NavLink>
            </li>
            <li>
                <NavLink to="/info">Info</NavLink>
            </li>
        </ul>
    </nav>
  )
}
