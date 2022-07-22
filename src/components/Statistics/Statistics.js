import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';
import styles from './Statistics.module.css';

const Statistics = ( {good, neutral, bad, total, positivePercentage}) => {
    return (
        <div className={styles.container}> 
            <h2 className={styles.title}>Statistics</h2>
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