import { useEffect, useState, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import NavigationBar from '../../components/nav/NavigationBar';
import ProgressIcon from '../../assets/images/icons/progress.png';
import CourseIcon from '../../assets/images/icons/course.png';
import styles from './Course.module.css';
import LatestUnit from '../../components/unit/LatestUnit';
import Unit from '../../components/unit/Unit';

const Course = () => {
    const [activeSection, setActiveSection] = useState('');
    const progressRef = useRef(null);
    const courseRef = useRef(null);

    useEffect(() => {
        document.title = 'Course | ConnextGen';
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                threshold: 0.8,
            }
        );

        if (progressRef.current) observer.observe(progressRef.current);
        if (courseRef.current) observer.observe(courseRef.current);

        return () => {
            if (progressRef.current) observer.unobserve(progressRef.current);
            if (courseRef.current) observer.unobserve(courseRef.current);
        };
    }, []);

    return (
        <>
            <NavigationBar isSolidBackground={true} />
            <div className={styles.background}>
                <div className={styles.panel}>
                    <HashLink
                        to="#progress"
                        className={activeSection === 'progress' ? styles.active : ''}
                    >
                        <div className={styles.panelItem}>
                            <img src={ProgressIcon} alt="progress icon"></img>
                            <span>Progress</span>
                        </div>
                    </HashLink>
                    <HashLink
                        to="#course"
                        className={activeSection === 'course' ? styles.active : ''}
                    >
                        <div className={styles.panelItem}>
                            <img src={CourseIcon} alt="course icon"></img>
                            <span>Course</span>
                        </div>
                    </HashLink>
                </div>
                <div className={styles.content}>
                    <div id="progress" ref={progressRef} className={styles.progress}>
                        <h1 className={styles.keepLearning}>Keep learning</h1>
                        <LatestUnit
                            unitNumber={1}
                            unitName="Unit Name"
                            lessonNumber={1}
                            lessonName="Lesson Name"
                            percentage={50}
                        />
                        <HashLink to="#units" className={styles.link}>
                            View full syllabus &gt;
                        </HashLink>
                    </div>
                    <div id="course" ref={courseRef} className={styles.course}>
                        <h1 className={styles.title}>The ConnextGen Professional Readiness Course</h1>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
                            hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices
                            mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare
                            leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante
                            fermentum sit amet.
                        </p>
                        <div id="units" className={styles.units}>
                            <Unit unitNumber={1} unitName="Unit Name" percentage={50} />
                            <Unit unitNumber={2} unitName="Unit Name" percentage={50} />
                            <Unit unitNumber={3} unitName="Unit Name" percentage={50} />
                            <Unit unitNumber={4} unitName="Unit Name" percentage={50} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Course;
