//library
import React from 'react'
import { Link } from 'gatsby'

//css
import '../../css/nav.css'

const Nav = () => {
    return (
        <nav>
            <div className="nav__wrapper">
                <div className="nav__link">
                    <Link to="/" className="link">Home</Link>
                </div>
                <div className="nav__link">
                    <Link to="/docs" className="link">Docs</Link>
                </div>
                <div className="nav__link">
                    <Link to="/about" className="link">About</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav