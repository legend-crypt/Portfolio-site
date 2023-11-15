import logo from '../assets/images/Logo_name.svg'
function Navbar({showContactButton}) {
    return (
        <header className="header container">
            <div class="row">
                <a href="#" className="nav__logo">
                    <img src={logo} className="logo" alt="logo" />
                </a>
                <nav className="nav">
                    <ul className="nav__list">
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
                </nav>
            </div>
        </header>
    )
}


export default Navbar;