import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './Lesson.module.css'
import NavigationBar from '../../components/nav/NavigationBar';
import LessonFooter from '../../components/footer/LessonFooter';

const Lesson = () => {
    const { state } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Lesson | ConnextGen';
    }, []);

    useEffect(() => {
        if (!state.isAuthenticated) navigate('/login');
    }, [state, navigate]);

    return (
        <>
            <NavigationBar isSolidBackground={true} isLesson={true} />
            <div className={styles.container}>
                <div>
                    <h1>Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit<br></br><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit</p>
                </div>
            </div>
            <LessonFooter />
        </>
    );
}

export default Lesson;