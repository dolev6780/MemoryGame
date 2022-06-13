import React from 'react'
import GameCard from '../GameCard/GameCard'
import './Board.css'
export default function Board(props) {
  
  return (
<div className="grid">
    {props.cards.map(card => {
      return <GameCard
       handleChoice={props.handleChoice}
        key={card.id} card={card}
         flipped={card ===props.choiceOne || card === props.choiceTwo || card.matched}
         disabled={props.disabled}/>
    })}
  </div>
  )
}
