import React from 'react'
import './card-list.style.css'
import { Card } from '../card/card.components.jsx'

export const CardList = (props) => {
    return (
        <div className="card-list">
            {props.Monsters.map(Monsters =>
                <Card Monsters={Monsters} />)}
        </div>
    )
}

