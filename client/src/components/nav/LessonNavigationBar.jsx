import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { formatTitle } from '../../utils/formattingUtils';
import styles from './LessonNavigationBar.module.css';

const LessonNavigationBar = ({ unit, lessons, isVisible, close }) => {
    const handleClick = () => {
        close();
    }

    return (
        <motion.div
            className={styles.container}
            initial={{ x: '-100%' }}
            animate={{ x: isVisible ? '0%' : '-100%' }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.5 }}
        >
            <div className={styles.nav}>
                <h1>{formatTitle(unit)}</h1>
                <div className={styles.lessons}>
                    {lessons.map((lesson, index) => (
                        <Link to={`/course/${unit}/${lesson}`} className={styles.lesson} onClick={handleClick}>
                            <div>
                                <span>Lesson {index + 1}</span>
                                <p>{formatTitle(lesson)}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default LessonNavigationBar;