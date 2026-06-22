function Navigationcontrols({currentIndex,totalCards,onPrev,onNext}){
    return(
    <div className="nav-controls">
        <button className="prev" onClick={onPrev} disabled={currentIndex===0}>Previous</button>
        {Array.from({ length: totalCards }).map((_, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'dot dot-active' : 'dot'}
          />
        ))}
        <button className="next" onClick={onNext} disabled={currentIndex===totalCards-1}>Next</button>
    </div>
    )
}
export default Navigationcontrols;