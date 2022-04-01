
import "./item.css"
import { useState } from "react"

const Item = ({card}) => {
  const [showLogo, setShowLogo] = useState(true)
  return (
    <div className="card" onClick={()=>setShowLogo(!showLogo)}>
      {showLogo ? (
        <div>
          <img className="card-logo" src={card.img} alt="" />
          <h3 className="card-title">{card.name}</h3>
      </div>
      ): (
        <div>
        <ul className="list">
            {card.options.map((element, index) => {
              return <li key={index} >{element}</li>
            })}
        </ul>
      </div>
      )}
      
      
        
    </div>
  )
}

export default Item