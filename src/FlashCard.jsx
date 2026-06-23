function FlashCard({card,isFlipped,onFlip}){
    return(
        <div>
            <div className="flip-container" onClick={onFlip}>
                <div className={`flip-card ${isFlipped ? 'is-flipped':''}`}>
                    <div className="flip-card-face flip-card-front">
                        <span className="label">QUESTION</span>
                        <h2>{card.question}</h2>
                    </div>
                    <div className="flip-card-face flip-card-back">
                        <span className="label">ANSWER</span>
                        <p>{card.answer}</p>
                        <pre>{card.code}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FlashCard