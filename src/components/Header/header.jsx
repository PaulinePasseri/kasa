import { Link, useLocation } from 'react-router-dom'
import HomeLogo from '../../assets/home-logo.png'
import AboutLogo from '../../assets/about-logo.png'

function Header() {
  const location = useLocation()
  const currentLogo = location.pathname === '/about' ? AboutLogo : HomeLogo
  return (
    <nav>
      <Link to="/">
        <img src={currentLogo} alt="Logo Kasa" />
      </Link>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </div>
    </nav>
  )
}

export default Header
