

const FeedbackOptions = () => {
    return (
        
        <div>
            <button onClick={this.addGoodFeedback}>Good</button>
            <button onClick={this.addNeutralFeedback}>Neutral</button>
            <button onClick={this.addBadFeedback}>Bad</button>
        </div>
    );
}

export default FeedbackOptions;