import Error404 from '../assets/404.png'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>
      <img src={Error404} alt="erreur 404" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}
