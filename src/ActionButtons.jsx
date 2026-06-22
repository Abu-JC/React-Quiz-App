function ActionButtons({onMastered,onReview}){
    return(
        <div className="action-buttons">
            <button className="mastered" onClick={onMastered}>Mastered</button>
            <button className="review" onClick={onReview}>Review</button>
        </div>
    )
}
export default ActionButtons;