import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPreviousLesson, getNextLesson } from '../../api';
import styles from './LessonFooter.module.css';

const LessonFooter = ({ unit, lesson }) => {
    const [previousLesson, setPreviousLesson] = useState(null);
    const [nextLesson, setNextLesson] = useState(null);

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const prevLesson = await getPreviousLesson(unit, lesson);
                const nextLesson = await getNextLesson(unit, lesson);

                setPreviousLesson(prevLesson);
                setNextLesson(nextLesson);
            } catch (error) {
                console.error("Failed to fetch lesson data:", error);
            }
        };

        fetchLessons();
    }, [unit, lesson]);

    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <Link 
                    to={previousLesson && previousLesson.unit ? `/course/${previousLesson.unit}/${previousLesson.lesson}` : '#'}
                    className={previousLesson && previousLesson.unit ? '' : styles.disabled}
                >
                    {previousLesson && previousLesson.unit ? '< Previous' : ''}
                </Link>
                <Link 
                    to={nextLesson && nextLesson.unit ? `/course/${nextLesson.unit}/${nextLesson.lesson}` : '#'}
                >
                    {nextLesson && nextLesson.unit ? 'Next >' : ''}
                </Link>
            </div>
        </div>
    );    
}

export default LessonFooter;