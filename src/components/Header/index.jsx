import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
    </div>
  )
}

export default Header
