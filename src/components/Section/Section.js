import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({title, children}) => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </section>
    );
}

export default Section;

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}