import data from '../data.json'
import { Link } from 'react-router-dom'

export default function Card() {
  const accomodationList = data
  return (
    <div className="cards__container">
      {accomodationList.map((item, index) => (
        <Link
          className="cards__container--link"
          to={`/accomodation/${item.id}`}
        >
          <div className="cards__container--card" key={index.id}>
            <img
              src={item.cover}
              alt="logement"
              className="cards__container--img"
            />
            <h2 className="cards__container--title">{item.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  )
}
