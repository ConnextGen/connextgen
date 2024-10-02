import { useEffect, useState, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useParams, useNavigate } from 'react-router-dom';
import { getLesson, getUnit, completeLesson } from '../../api';
import { AnimatePresence, motion } from 'framer-motion';
import { formatTitle } from '../../utils/formattingUtils';
import Markdown from 'react-markdown';
import styles from './Lesson.module.css'
import NavigationBar from '../../components/nav/NavigationBar';
import LessonNavigationBar from '../../components/nav/LessonNavigationBar';
import LessonFooter from '../../components/footer/LessonFooter';

const Lesson = () => {
    const { state } = useAuth();
    
    const navigate = useNavigate();
    const { unit, lesson } = useParams();
    const [lessonContent, setLessonContent] = useState(null);
    
    const [lessons, setLessons] = useState([]);

    const [isSidePanelVisible, setSidePanelVisible] = useState(false);
    const sidePanelRef = useRef(null);

    useEffect(() => {
        document.title = 'Lesson | ConnextGen';
    }, []);

    useEffect(() => {
        if (!state.isAuthenticated) navigate('/login');
    }, [state, navigate]);

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const lessonData = await getLesson(unit, lesson);
                setLessonContent(lessonData);

                const unitData = await getUnit(unit);
                setLessons(unitData.lessons);
            } catch (error) {
                console.error('Failed to fetch lesson:', error);
            }
        };

        fetchLessons();
    }, [unit, lesson]);

    useEffect(() => {
        const handleLessonCompletion = async () => {
            try {
                await completeLesson(unit, lesson, state.user._id);
            } catch (error) {
                console.error('Failed to complete lesson:', error);
            }
        };

        handleLessonCompletion();
    }, [unit, lesson, state]);
    
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
                    <Markdown>{lessonContent}</Markdown>
                </div>
            </div>
            <AnimatePresence>
                {isSidePanelVisible && (
                    <motion.div ref={sidePanelRef}>
                        <LessonNavigationBar 
                            unit={unit} 
                            lessons={lessons.map(lesson => lesson.title)} 
                            isVisible={isSidePanelVisible} 
                            close={() => setSidePanelVisible(false)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <LessonFooter 
                unit={unit} 
                lesson={lesson}
            />
        </>
    );
}

export default Lesson;