import { useState, useEffect } from 'react';
import Board from './components/Board/Board';
import './App.css';

const cardImges = [
  {"src":"/assets/dragon-ball.jpg",matched:false},
  {"src":"/assets/dragon-ball2.jpg",matched:false},
  {"src":"/assets/goku1.jpg",matched:false},
  {"src":"/assets/gokublue.png",matched:false},
  {"src":"/assets/gokuui.jpg",matched:false},
  {"src":"/assets/super-broly.jpg",matched:false},
  {"src":"/assets/Ultra-Instinct-Goku.webp",matched:false},
  {"src":"/assets/vegitagoku.jpg",matched:false},
  {"src":"/assets/vegitagoku2.webp",matched:false},
  {"src":"/assets/vegito.jpg",matched:false},
]

function App() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false)
  //shuffle cards
  const shuffleCards = () =>{
    const shuffledCard = [...cardImges,...cardImges]
      .sort(()=>Math.random() - 0.5)
      .map((card)=>({...card, id:Math.random()}));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCard);
  }

  const handleChoice = (card) =>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }
  useEffect(()=>{
    if(choiceOne && choiceTwo){
      setDisabled(true)
      if(choiceOne.src === choiceTwo.src){
        setCards(prevCard => {
          return prevCard.map(card => {
            if(card.src === choiceOne.src){
              return {...card, matched: true}
            }
            else{
              return card
            }
          })
        })
        resetTurn();
      }
      else{
        setTimeout(()=>{
          resetTurn()
        },2000)
      }
    }
  },[choiceOne,choiceTwo])
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false)
  }
  return (
    <div className="App">
      <button onClick={shuffleCards}>New Game</button>
     <Board handleChoice={handleChoice} cards={cards}
      choiceOne={choiceOne} choiceTwo={choiceTwo}
      disabled={disabled}/>
    </div>
  );
}

export default App;
