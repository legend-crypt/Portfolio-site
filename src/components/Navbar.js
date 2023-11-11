import logo from '../assets/images/Logo_name.svg'
function Navbar() {
    return (
        <header className="header container">
            <div class="row">
                <a href="#" className="nav__logo">
                    <img src={logo} className="logo" alt="logo" />
                </a>
                <nav className="nav">
                    <ul className="nav__list">
                        <a href="">
                            <li className= "col">Home</li>
                        </a>
                        <a href="">
                            <li className= "col">About</li>
                        </a>
                        <a href="">
                            <li className= "col">Portfolio</li>
                        </a>
                        <a href="">
                            <li className= "col">Blog</li>
                        </a>
                        <a href="">
                            <li className='btn__normal col'>Contact</li>
                        </a>
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Navbar;