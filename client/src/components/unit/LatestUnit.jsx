import { Link } from 'react-router-dom';
import styles from './LatestUnit.module.css';

const LatestUnit = ({ unitNumber, unitName, lessonNumber, lessonName, percentage }) => { 
    return (
        <div className={styles.unit}>
            <div className={styles.body}>
                <h1>Unit {unitNumber}: {unitName}</h1>
                <h3>Lesson {lessonNumber}: {lessonName}</h3>
            </div>
            <div className={styles.bottom}>
                <div className={styles.progress}>
                    <div className={styles.bar} style={{ width: `${percentage}%` }}>{percentage}%</div>
                </div>
                <div className={styles.resume}>
                    <Link to=''>Resume &gt;</Link>
                </div>
            </div>
        </div>
    );
}

export default LatestUnit;