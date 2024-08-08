import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Card() {
  const [accomodationList, setAccomodationList] = useState([])
  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setAccomodationList(data))
      .catch((error) => {
        console.error('Erreur lors de la récupération des données:', error)
      })
  }, [])
  return (
    <div className="cards__container">
      {accomodationList.map((item, index) => (
        <Link
          className="cards__container--link"
          to={`/accomodation/${item.id}`}
          key={item.id}
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
