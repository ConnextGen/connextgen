import { HashLink } from 'react-router-hash-link';
import styles from './LessonFooter.module.css';

const LessonFooter = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <HashLink to='/course/unit/lesson'>&lt; Previous</HashLink>
                <HashLink to='/course/unit/lesson'>Next &gt;</HashLink>
            </div>
        </div>
    );
}

export default LessonFooter;