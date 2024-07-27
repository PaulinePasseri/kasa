import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HomeLogo from '../assets/home-logo.png'
import AboutLogo from '../assets/about-logo.png'

export default function Header() {
  const location = useLocation()
  const currentLogo = location.pathname === '/' ? HomeLogo : AboutLogo
  const [activeLink, setActiveLink] = useState(location.pathname)
  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location.pathname])
  return (
    <nav className="navBar">
      <Link to="/">
        <img src={currentLogo} alt="Logo Kasa" className="navBar__logo" />
      </Link>
      <div className='navBar__routes'>
      <Link
          className={`navBar__routes--link ${activeLink === '/' ? 'underline' : ''}`}
          to="/"
          onClick={() => setActiveLink('/')}
        >
          Accueil
        </Link>
        <Link
          className={`navBar__routes--link ${activeLink === '/about' ? 'underline' : ''}`}
          to="/about"
          onClick={() => setActiveLink('/about')}
        >
          A propos
        </Link>
      </div>
    </nav>
  )
}
