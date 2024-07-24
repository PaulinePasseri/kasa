import data from '../../data.json'
import { Link } from 'react-router-dom'

export default function Card() {
  const accomodationList = data
  return (
    <div>
      {accomodationList.map((item, index) => (
        <Link to={`/accomodation/${item.id}`}>
          <div key={index.id}>
            <img src={item.cover} alt="logement" />
            <h2>{item.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  )
}
