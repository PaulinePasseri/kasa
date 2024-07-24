export default function Collapse({ title, description }) {
  return (
    <div>
      <i class="fa-solid fa-chevron-up"></i>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
