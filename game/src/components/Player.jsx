import { useState} from 'react'

export default function Player({ name, symbol}){
    
    const [isEditing, setIsEditing] = useState(false)

    const playerName = isEditing 
    ? <input type="text" required value={name}/> 
    : <span className="player-name">{name}</span>
    const btnCaption = isEditing ? "Save" : "Edit"
    

    function handleEdit(){
        setIsEditing((isEditing) => !isEditing)
    }

    return(
        <li>
            <span className="player">
              {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{btnCaption}</button>
      </li>
    )
}