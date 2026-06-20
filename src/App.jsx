import { useState } from 'react'
import cards from './cards.jsx'
import FlashCard from './FlashCard.jsx';
function App(){
  const card = cards[0]
  const [isFlipped,setIsFlipped] = useState(false);
  function handleflip(){
    setIsFlipped(!isFlipped)
  }
  return(
  <>
  <FlashCard card={card} isFlipped={isFlipped} onFlip = {handleflip} />
  </>)
}
export default App