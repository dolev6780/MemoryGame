import React from 'react'
import './GameCard.css'
export default function GameCard(props) {

  const handleClick = () => {
    props.handleChoice(props.card);
  }

  return (
    <div className='card' key={props.key}>
      <div>
        <img className='front' src={props.card.src} alt="card front"/>
        <img className='back' onClick={handleClick} src="/assets/dbmg Wallpaper.jpg" alt="card back" />
      </div>
    </div>
  )
}
