import logo from '../assets/images/Logo_name.svg';
import closeIcon from '../assets/images/mingcute_close-fill.svg';
import hamburger from '../assets/images/ci_hamburger.svg';
import { useState } from 'react';


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
                <a href="#" className="nav__logo">
                    <img src={logo} className="logo" alt="logo" />
                </a>
                <nav className="nav">
                    <ul id="nav__list" className={clicked? "#nav_list active": "#nav_list"}>
                        <a href="">
                            <li className= "nav__list--text col">Home</li>
                        </a>
                        <a href="">
                            <li className= "nav__list--text col">About</li>
                        </a>
                        <a href="">
                            <li className= "nav__list--text col">Portfolio</li>
                        </a>
                        <a href="">
                            <li className= "nav__list--text col">Blog</li>
                        </a>
                                                
                        {showContactButton && (
                        <a href="">
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