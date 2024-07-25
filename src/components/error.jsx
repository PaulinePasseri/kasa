import Error404 from '../assets/404.png'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className="error__container">
      <img src={Error404} alt="erreur 404" className="error__container--img" />
      <p className="error__container--txt">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="error__container--link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}
