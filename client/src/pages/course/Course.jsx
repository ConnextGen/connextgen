import { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link'
import NavigationBar from '../../components/nav/NavigationBar';
import ProgressIcon from '../../assets/images/icons/progress.png';
import CourseIcon from '../../assets/images/icons/course.png';
import styles from './Course.module.css';
import Unit from '../../components/unit/LatestUnit';

const Course = () => {
    useEffect(() => {
        document.title = 'Course | ConnextGen';
    }, []);

    return (
        <>
            <NavigationBar isSolidBackground={true} />
            <div className={styles.background}>
                <div className={styles.panel}>
                    <HashLink to='#progress'>
                        <div className={styles.panelItem}>
                            <img src={ProgressIcon} alt='progress icon'></img>
                            <span>Progress</span>
                        </div>
                    </HashLink>
                    <HashLink to='#course'>
                        <div className={styles.panelItem}>
                            <img src={CourseIcon} alt='course icon'></img>
                            <span>Course</span>
                        </div>
                    </HashLink>
                </div>
                <div className={styles.content}>
                    <div id='progress'>
                        <h1 className={styles.keepLearning}>Keep learning</h1>
                        <Unit unitNumber={1} unitName='Unit Name' lessonNumber={1} lessonName='Lesson Name' percentage={50} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Course;