import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import styles from './LessonNavigationBar.module.css';

const LessonNavigationBar = ({ unitName, lessons, isVisible }) => {
    return (
        <motion.div
            className={styles.container}
            initial={{ x: '-100%' }}
            animate={{ x: isVisible ? '0%' : '-100%' }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.5 }}
        >
            <div className={styles.nav}>
                <h1>{unitName}</h1>
                <div className={styles.lessons}>
                    {lessons.map((lesson, index) => (
                        <HashLink to='/course/unit/lesson' className={styles.lesson} key={index}>
                            <div>
                                <span>Lesson {index + 1}</span>
                                <p>{lesson}</p>
                            </div>
                        </HashLink>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default LessonNavigationBar;