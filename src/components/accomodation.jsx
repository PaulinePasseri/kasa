import { useParams } from 'react-router-dom'
import data from '../data.json'
import Collapse from './collapse'
import Slideshow from './slideshow'

export default function Accomodation() {
  const { id } = useParams()
  const item = data.find((item) => item.id === id)
  const range = [1, 2, 3, 4, 5]
  if (!item) {
    return <p>Logement non trouvé</p>
  }
  return (
    <div>
      <Slideshow pictures={item.pictures} />
      <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>{item.location}</p>
      </div>
      <div>
        <div>
          <p>{item.host.name}</p>
          <img src={item.host.picture} alt="hôte" />
          <div>{item.tags}</div>
        </div>
        <div>
          {range.map((rangeElem) => (
            <i
              key={rangeElem}
              className={`fa-solid fa-star ${item.rating >= rangeElem ? 'filled-star' : 'empty-star'}`}
            ></i>
          ))}
        </div>
      </div>
      <div>
        <Collapse title="Description" description={item.description} />
        <Collapse title="Équipements" description={item.equipments} />
      </div>
    </div>
  )
}
