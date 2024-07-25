import { Link, useLocation } from 'react-router-dom'
import HomeLogo from '../assets/home-logo.png'
import AboutLogo from '../assets/about-logo.png'

export default function Header() {
  const location = useLocation()
  const currentLogo = location.pathname === '/' ? HomeLogo : AboutLogo
  return (
    <nav className="navBar">
      <Link to="/">
        <img src={currentLogo} alt="Logo Kasa" className="navBar__logo" />
      </Link>
      <div className="navBar__routes">
        <Link className="navBar__routes--link" to="/">
          Accueil
        </Link>
        <Link className="navBar__routes--link" to="/about">
          A propos
        </Link>
      </div>
    </nav>
  )
}
