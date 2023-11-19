import logo from '../assets/images/Logo_name.svg';
import closeIcon from '../assets/images/mingcute_close-fill.svg';
import hamburger from '../assets/images/ci_hamburger.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({showContactButton}) {
    const [clicked, setClicked] = useState(false)

    const hamburgerClicked = () => {
        if (!clicked) {
            setClicked(true)
        }
        else {
            setClicked(false)
        }

    }


    return (
        <header className="header">
            <div class="row container">
                <Link to="/" className="nav__logo">
                    <img src={logo} className="logo" alt="logo" />
                </Link>
                <nav className="nav">
                    <ul id="nav__list" className={clicked? "#nav_list active": "#nav_list"}>
                        <Link to="/">
                            <li className= "nav_list--first nav__list--text col">Home</li>
                        </Link>
                        <Link to="/about">
                            <li className= "nav__list--text col">About</li>
                        </Link>
                        <Link to="portfolio">
                            <li className= "nav__list--text col">Portfolio</li>
                        </Link>
                        <Link to="/blog">
                            <li className= "nav__list--text col">Blog</li>
                        </Link>
                                                
                        {showContactButton && (
                        <a href='mailto:konadulordkweku@gmail.com' target='_blank'>
                            <button className='btn__normal nav__list--text col'>Contact</button>
                        </a>
                        )}
                    </ul>

                    <div>
                        <button className="mobile_toggle" onClick={hamburgerClicked}><img src={clicked? closeIcon: hamburger }></img></button>

                    </div>
                </nav>
            </div>
        </header>
    )
}


export default Navbar;