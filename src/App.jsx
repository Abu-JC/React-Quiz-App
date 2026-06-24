import { useEffect, useState } from 'react'
import cards from './cards.jsx'
import FlashCard from './FlashCard.jsx';
import Navigationcontrols from './Navigationcontrols.jsx';
import ActionButtons from './ActionButtons.jsx';
import ProgressHeader from './ProgressHeader.jsx'
import ResultsView from './ResultsView.jsx';
function App(){
  const [isFlipped,setIsFlipped] = useState(false);
  const [currentIndex,setCurrentIndex] = useState(0);
 const [masteredCards, setMasteredCards] = useState(()=>{
  const saved = localStorage.getItem('mastered-score');
  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? new Set(parsed) : new Set();
  } catch {
    return new Set();
  }
});
  const [quizFinished,setQuizFinished] = useState(false)
  const card = cards[currentIndex]
  const masteredCount = masteredCards.size;
useEffect(()=>{
  localStorage.setItem('mastered-score',JSON.stringify([...masteredCards]))
},[masteredCards])
  function handleflip(){
    setIsFlipped(!isFlipped)
  }
  function markMastered(){
    setMasteredCards(m=>new Set(m).add(currentIndex));
    handleNext();
  }
  function markNeedsReview(){
    handleNext();
  }
  function handleNext(){
    if(currentIndex<cards.length-1){
      setIsFlipped(false)
      setCurrentIndex(currentIndex+1)
    }
    else{
      setQuizFinished(true)
    }
  }
  function handlePrev(){
    if(currentIndex>0){
      setIsFlipped(false)
      setCurrentIndex(currentIndex-1)
    }
  }
  function restartQuiz(){
    setCurrentIndex(0)
    setIsFlipped(false)
    setMasteredCards(new Set())
    setQuizFinished(false)
  }
  if(quizFinished){
    return(
      <ResultsView
      masteredCount={masteredCount}
      totalCards={cards.length}
      onRestart={restartQuiz}
      />
    );
  }
  return(
  <>
  <ProgressHeader
    currentIndex={currentIndex}
    totalCards={cards.length}
    masteredCount={masteredCount}
    />
  <FlashCard card={card} isFlipped={isFlipped} onFlip = {handleflip} />
  {isFlipped&&<ActionButtons onMastered={markMastered} onReview={markNeedsReview}/>}
  <Navigationcontrols
  currentIndex={currentIndex}
  onNext={handleNext}
  onPrev={handlePrev}
  totalCards={cards.length}
  />
  </>)
}
export default App