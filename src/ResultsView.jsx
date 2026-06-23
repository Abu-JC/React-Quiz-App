function ResultsView({masteredCount,totalCards,onRestart}){
    const accuracy = Math.round((masteredCount/totalCards)*100);
    return(
        <div className="results-view">
            <h2 className="results-title">Deck Complete😝</h2>
            <p className="results-subtitle">You've mastered some core React concepts.</p>

            <div className="results-stats">
                <div className="stat-card">
                    <span className="stat-label">Total Score </span>
                    <span className="stat-value">{masteredCount}/{totalCards}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Accuracy</span>
                    <span className="stat-value">{accuracy}%</span>
                </div>
            </div>
            <button className="restart-button" onClick={onRestart}>Restart Deck</button>
        </div>
    )
}
export default ResultsView;