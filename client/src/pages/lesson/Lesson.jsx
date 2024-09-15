import { useEffect, useState, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useParams, useNavigate } from 'react-router-dom';
import { getLesson } from '../../api';
import { AnimatePresence, motion } from 'framer-motion';
import { formatTitle } from '../../utils/formattingUtils';
import styles from './Lesson.module.css'
import NavigationBar from '../../components/nav/NavigationBar';
import LessonNavigationBar from '../../components/nav/LessonNavigationBar';
import LessonFooter from '../../components/footer/LessonFooter';

const Lesson = () => {
    const { state } = useAuth();
    
    const navigate = useNavigate();
    const { unit, lesson } = useParams();
    const [lessonContent, setLessonContent] = useState(null);

    const [isSidePanelVisible, setSidePanelVisible] = useState(false);
    const sidePanelRef = useRef(null);

    useEffect(() => {
        document.title = 'Lesson | ConnextGen';
    }, []);

    useEffect(() => {
        if (!state.isAuthenticated) navigate('/login');
    }, [state, navigate]);

    useEffect(() => {
        const fetchLesson = async () => {
            try {
                const lessonData = await getLesson(unit, lesson);
                setLessonContent(lessonData);
            } catch (error) {
                console.error('Failed to fetch lesson:', error);
            }
        };

        fetchLesson();
    }, [unit, lesson]);
    
    useEffect(() => {
        if (isSidePanelVisible) {
            document.body.style.overflow = 'hidden';
            
            const handleClickOutside = (event) => {
                if (sidePanelRef.current && !sidePanelRef.current.contains(event.target)) {
                    setSidePanelVisible(false);
                }
            };

            document.addEventListener('mousedown', handleClickOutside);

            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isSidePanelVisible]);

    const toggleSidePanel = () => {
        setSidePanelVisible(!isSidePanelVisible);
    };

    return (
        <>
            <NavigationBar isSolidBackground={true} isLesson={true} toggleSidePanel={toggleSidePanel} />
            <div className={styles.container}>
                <div>
                    <h1>{formatTitle(lesson)}</h1>
                    <p>{lessonContent}</p>
                </div>
            </div>
            <AnimatePresence>
                {isSidePanelVisible && (
                    <motion.div ref={sidePanelRef}>
                        <LessonNavigationBar 
                            unitName={'Unit Name'} 
                            lessons={['Lesson Name', 'Lesson Name', 'Lesson Name', 'Lesson Name', 'Lesson Name', 'Lesson Name', 'Lesson Name']} 
                            isVisible={isSidePanelVisible} 
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <LessonFooter />
        </>
    );
}

export default Lesson;