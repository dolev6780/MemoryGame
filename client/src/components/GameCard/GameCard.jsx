import React from 'react'
import './GameCard.css'
export default function GameCard(props) {

  const handleClick = () => {
    if(!props.disabled){
      props.handleChoice(props.card);
    }
  }

  return (
    <div className='card' key={props.key}>
      <div className={props.flipped ? "flipped": ""}>
        <img className='front' src={props.card.src} alt="card front"/>
        <img className='back' onClick={handleClick} src="/assets/dbmg Wallpaper.jpg" alt="card back" />
      </div>
    </div>
  )
}
