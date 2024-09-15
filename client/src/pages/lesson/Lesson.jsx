import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Lesson.module.css'
import NavigationBar from '../../components/nav/NavigationBar';
import LessonNavigationBar from '../../components/nav/LessonNavigationBar';
import LessonFooter from '../../components/footer/LessonFooter';

const Lesson = () => {
    const { state } = useAuth();
    const navigate = useNavigate();
    const [isSidePanelVisible, setSidePanelVisible] = useState(false);
    const sidePanelRef = useRef(null);

    useEffect(() => {
        document.title = 'Lesson | ConnextGen';
    }, []);

    useEffect(() => {
        if (!state.isAuthenticated) navigate('/login');
    }, [state, navigate]);
    
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
                    <h1>Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit<br></br><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit</p>
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