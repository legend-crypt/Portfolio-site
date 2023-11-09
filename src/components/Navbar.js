import logo from '../assets/images/Logo_name.svg'
function Navbar() {
    return (
        <header className="header">
            <div class="row">
                <a href="#" className="nav__logo">
                    <img src={logo} className="logo" alt="logo" />
                </a>
                <nav className="nav">
                    <ul className="nav__list">
                        <li>Home</li>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Blog</li>
                        <li>Tech Stack</li>
                        <li className='btn__normal'>Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Navbar;