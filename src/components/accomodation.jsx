import { useParams } from 'react-router-dom'
import data from '../data.json'
import Collapse from './collapse'
import Slideshow from './slideshow'
import Error from './error'

export default function Accomodation() {
  const { id } = useParams()
  const item = data.find((item) => item.id === id)
  const range = [1, 2, 3, 4, 5]
  if (!item) {
    return <Error />
  }
  return (
    <div className="accomodation__container">
      <Slideshow pictures={item.pictures} />
      <div className="info__container">
        <div className="info__container--txt">
          <h2>{item.title}</h2>
          <p>{item.location}</p>
          <div className="info__container--tags">
            <ul>
              {item.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="info__container--host">
            <p>{item.host.name}</p>
            <img src={item.host.picture} alt="hôte" />
          </div>
          <div className="info__container--rating">
            {range.map((rangeElem) => (
              <i
                key={rangeElem}
                className={`fa-solid fa-star ${item.rating >= rangeElem ? 'filled-star' : 'empty-star'}`}
              ></i>
            ))}
          </div>
        </div>
      </div>
      <div className="accomodation__container--info">
        <Collapse title="Description" description={item.description} />
        <Collapse title="Équipements" description={item.equipments} />
      </div>
    </div>
  )
}
