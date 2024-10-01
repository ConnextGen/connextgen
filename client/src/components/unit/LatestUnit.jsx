import { HashLink } from 'react-router-hash-link';
import { formatTitle } from '../../utils/formattingUtils';
import styles from './LatestUnit.module.css';

const LatestUnit = ({ unit, lesson, percentage }) => { 
    return (
        <div className={styles.unit}>
            <div className={styles.body}>
                <h1>Unit {unit.order}: {formatTitle(unit.title)}</h1>
                <h3>Lesson {lesson.order}: {formatTitle(lesson.title)}</h3>
            </div>
            <div className={styles.bottom}>
                <div className={styles.progress}>
                    {percentage > 0 ? <div className={styles.bar} style={{ width: `${percentage}%` }}>{percentage < 90 ? percentage + '%' : null}</div> : null}
                </div>
                <div className={styles.resume}>
                    <HashLink to={`/course/${unit.title}/${lesson.title}`}>Resume &gt;</HashLink>
                </div>
            </div>
        </div>
    );
}

export default LatestUnit;