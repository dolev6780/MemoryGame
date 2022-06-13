import Board from './components/Board/Board';
import './App.css';
import GameCard from './components/GameCard/GameCard';
import { useState, useEffect } from 'react';

const cardImges = [
  {"src":"/assets/dragon-ball.jpg"},
  {"src":"/assets/dragon-ball2.jpg"},
  {"src":"/assets/goku1.jpg"},
  {"src":"/assets/gokublue.png"}
]

function App() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  //shuffle cards
  const shuffleCards = () =>{
    const shuffledCard = [...cardImges,...cardImges]
      .sort(()=>Math.random() - 0.5)
      .map((card)=>({...card, id:Math.random()}));
    setCards(shuffledCard)
  }

  const handleChoice = (card) =>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }
  useEffect(()=>{
    if(choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        console.log("matches")
        resetTurn();
      }
      else{
        console.log("dont matches")
        resetTurn()
      }
    }
  },[choiceOne,choiceTwo])
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  }
  return (
    <div className="App">
      <button onClick={shuffleCards}>New Game</button>
     <Board handleChoice={handleChoice} cards={cards}/>
    </div>
  );
}

export default App;
