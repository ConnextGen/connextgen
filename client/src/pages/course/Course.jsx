import { useEffect, useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getCourse, getProgress } from '../../api';
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
    const [progress, setProgress] = useState(null);

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

        const fetchProgress = async () => {
            try {
                console.log(state.user._id);
                const progress = await getProgress(state.user._id);
                setProgress(progress);
            } catch (error) {
                console.error("Failed to fetch user progress:", error);
            }
        }

        fetchCourse();
        fetchProgress();
    }, [state]);

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
                    <Link
                        to="#progress"
                        className={activeSection === 'progress' ? styles.active : ''}
                    >
                        <div className={styles.panelItem}>
                            <img src={ProgressIcon} alt="progress icon"></img>
                            <span>Progress</span>
                        </div>
                    </Link>
                    <Link
                        to="#course"
                        className={activeSection === 'course' ? styles.active : ''}
                    >
                        <div className={styles.panelItem}>
                            <img src={CourseIcon} alt="course icon"></img>
                            <span>Course</span>
                        </div>
                    </Link>
                </div>
                <div className={styles.content}>
                    <div id="progress" ref={progressRef} className={styles.progress}>
                        <h1 className={styles.keepLearning}>Keep learning</h1>
                        {progress ? (
                            <LatestUnit 
                                unit={progress.lastVisited.unit}
                                lesson={progress.lastVisited.lesson}
                                percentage={progress.progress.find(p => p.unit._id === progress.lastVisited.unit?._id)?.percentage || 0}
                            />
                        ) : (
                            <p className={styles.description}>Loading progress...</p>
                        )}
                        <Link to="#units" className={styles.link}>
                            View full syllabus &gt;
                        </Link>
                    </div>
                    <div id="course" ref={courseRef} className={styles.course}>
                        <h1 className={styles.title}>{course?.title || 'Loading...'}</h1>
                        <p className={styles.description}>{course?.description || 'Loading...'}</p>
                        <div id="units" className={styles.units}>
                            {course?.units?.map((unit) => (
                                <Unit 
                                    unit={unit}
                                    percentage={progress?.progress?.find(p => p.unit.title === unit.title)?.percentage || 0}
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