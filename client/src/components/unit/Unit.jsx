import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { formatTitle } from '../../utils/formattingUtils';
import styles from './Unit.module.css';

const Unit = ({ unit, percentage }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleUnitClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.container} onClick={handleUnitClick}>
            <div className={styles.unit}>
                <h1><span className={styles.order}>Unit {unit.order}:</span> {formatTitle(unit.title)}</h1>
                <div className={styles.progress}>
                    <p>{percentage}<span className={styles.percentage}>%</span></p>
                    <CircularProgress
                        variant='determinate'
                        value={percentage} 
                        thickness={8}
                        size={'8vh'}
                        style={{ color: '#2c9a93' }}
                    />
                </div>
            </div>
            <div className={`${styles.lessons} ${isExpanded ? styles.expanded : ''}`}>
                {unit.lessons.map((lesson) => (
                    <Link to={`/course/${unit.title}/${lesson.title}`} className={styles.lesson}>
                        <span>Lesson {lesson.order}</span>
                        <p>{formatTitle(lesson.title)}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Unit;
