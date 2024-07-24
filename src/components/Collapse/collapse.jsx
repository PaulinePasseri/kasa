import { useState } from 'react'

export default function Collapse({ title, description }) {
  const [isCollapsed, setIsCollapsed] = useState(true)
  return (
    <div>
      <div onClick={() => setIsCollapsed(!isCollapsed)}>
        <h2>{title}</h2>
        <i
          className={`fa-solid ${isCollapsed ? 'fa-chevron-down' : 'fa-chevron-up'}`}
        ></i>
      </div>
      {!isCollapsed && <p>{description}</p>}
    </div>
  )
}

/* <div className="collapse-container">
  <div onClick={() => setIsCollapsed(!isCollapsed)} className="collapse-header">
    <h2>{title}</h2>
    <i
      className={`fa-solid fa-chevron-down ${isCollapsed ? '' : 'rotate'}`}
    ></i>
  </div>
  <div className={`collapse-content ${isCollapsed ? 'collapsed' : ''}`}>
    <p>{description}</p>
  </div>
</div> */
