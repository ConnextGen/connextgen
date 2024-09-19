import { HashLink } from 'react-router-hash-link';
import { formatTitle } from '../../utils/formattingUtils';
import styles from './LatestUnit.module.css';

const LatestUnit = ({ unitNumber, unitName, lessonNumber, lessonName, percentage }) => { 
    return (
        <div className={styles.unit}>
            <div className={styles.body}>
                <h1>Unit {unitNumber}: {formatTitle(unitName)}</h1>
                <h3>Lesson {lessonNumber}: {formatTitle(lessonName)}</h3>
            </div>
            <div className={styles.bottom}>
                <div className={styles.progress}>
                    <div className={styles.bar} style={{ width: `${percentage}%` }}>{percentage}%</div>
                </div>
                <div className={styles.resume}>
                    <HashLink to={`/course/${unitName}/${lessonName}`}>Resume &gt;</HashLink>
                </div>
            </div>
        </div>
    );
}

export default LatestUnit;