import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import styles from './Unit.module.css';

const Unit = ({ unitNumber, unitName, percentage, lessons }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleUnitClick = () => {
        setIsExpanded(!isExpanded);
    };

    const handleLinkClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div className={styles.container} onClick={handleUnitClick}>
            <div className={styles.unit}>
                <h1><span className={styles.unitNumber}>Unit {unitNumber}:</span> {unitName}</h1>
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
                {lessons.map((lesson, index) => (
                    <HashLink to='/course/unit/lesson' className={styles.lesson} onClick={handleLinkClick}>
                        <div>
                            <span>Lesson {index + 1}</span>
                            <p>{lesson}</p>
                        </div>
                    </HashLink>
                ))}
            </div>
        </div>
    );
}

export default Unit;
