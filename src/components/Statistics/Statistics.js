import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';

const Statistics = ( {good, neutral, bad, total, positivePercentage}) => {
    return (
        <div> 
            <h3>Statistics</h3>
            {total === 0 ? <Notification message="There is no feedback" /> :  
            <div><p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
                    <p>Positive feedback: {positivePercentage}%</p> 
            </div>}
        </div>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;