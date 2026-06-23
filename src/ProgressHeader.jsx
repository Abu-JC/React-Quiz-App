function ProgressHeader({masteredCount,totalCards,currentIndex}){
    const masteryPercentage = Math.round((masteredCount/totalCards)*100);
    const progressPercent = ((currentIndex + 1)/totalCards)*100
    return(
        <div className="progress-header">
            <div className="progress-header-top">
                <span className="card-counter">Card {currentIndex+1} of {totalCards}</span>
                <span className="score-badge">Score: {masteredCount}</span>
            </div>
            <div className="progress-bar-track">
                <div className="progress-bar-fill" style={{width: `${progressPercent}%`}}/>
            </div>
            <span className="mastery-label">Deck Mastery: {masteryPercentage}%</span>
        </div>
    );
}
export default ProgressHeader;