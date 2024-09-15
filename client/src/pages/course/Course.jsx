import { useEffect, useState, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getCourse } from '../../api';
import NavigationBar from '../../components/nav/NavigationBar';
import ProgressIcon from '../../assets/images/icons/progress.png';
import CourseIcon from '../../assets/images/icons/course.png';
import LatestUnit from '../../components/unit/LatestUnit';
import Unit from '../../components/unit/Unit';
import styles from './Course.module.css';


const Course = () => {
    const { state } = useAuth();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('');

    const progressRef = useRef(null);
    const courseRef = useRef(null);

    const [course, setCourse] = useState(null);

    useEffect(() => {
        document.title = 'Course | ConnextGen';
    }, []);

    useEffect(() => {
        if (!state.isAuthenticated) navigate('/login');
    }, [state, navigate]);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const course = await getCourse();
                setCourse(course);
            } catch (error) {
                console.error("Failed to fetch course data:", error);
            }
        }

        fetchCourse();
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
                threshold: 0.7,
            }
        );

        const progressElement = progressRef.current;
        const courseElement = courseRef.current;

        if (progressElement) observer.observe(progressElement);
        if (courseElement) observer.observe(courseElement);

        return () => {
            if (progressElement) observer.unobserve(progressElement);
            if (courseElement) observer.unobserve(courseElement);
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
                        <LatestUnit unitNumber={1} unitName="Unit Name" lessonNumber={1} lessonName="Lesson Name" percentage={50} />
                        <HashLink to="#units" className={styles.link}>
                            View full syllabus &gt;
                        </HashLink>
                    </div>
                    <div id="course" ref={courseRef} className={styles.course}>
                        <h1 className={styles.title}>{course?.title || 'Loading...'}</h1>
                        <p className={styles.description}>{course?.description || 'Loading...'}</p>
                        <div id="units" className={styles.units}>
                            {course?.units?.map((unit) => (
                                <Unit 
                                    unit={unit}
                                    percentage={50}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Course;