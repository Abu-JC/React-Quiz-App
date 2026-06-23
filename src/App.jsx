import { useState } from 'react'
import cards from './cards.jsx'
import FlashCard from './FlashCard.jsx';
import Navigationcontrols from './Navigationcontrols.jsx';
import ActionButtons from './ActionButtons.jsx';
import ProgressHeader from './ProgressHeader.jsx'
import ResultsView from './ResultsView.jsx';
function App(){
  const [isFlipped,setIsFlipped] = useState(false);
  const [currentIndex,setCurrentIndex] = useState(0);
  const [masteredCount, setMasteredCount] = useState(0);
  const [quizFinished,setQuizFinished] = useState(false)
  const card = cards[currentIndex]

  function handleflip(){
    setIsFlipped(!isFlipped)
  }
  function markMastered(){
    setMasteredCount(masteredCount + 1);
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
    setMasteredCount(0)
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