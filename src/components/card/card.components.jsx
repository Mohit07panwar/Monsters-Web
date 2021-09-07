import React from 'react'
import  './card.style.css'
export const Card = (props) => {
    return (
        <div className="css">
           <img src={`https://robohash.org/${props.Monsters.id}?set=set2&size=180x180`} alt="Monsters"/>
            <h1>{props.Monsters.name}</h1>
            <p>{props.Monsters.email}</p>
        </div>
    )

}