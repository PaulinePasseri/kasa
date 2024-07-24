import data from '../../data.json'

export default function Card() {
  const accomodationList = data
  return (
    <div>
      {accomodationList.map((item, index) => (
        <div key={index.id}>
          <img src={item.cover} alt="logement" />
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  )
}
