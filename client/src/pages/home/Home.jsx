import { useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import NavigationBar from '../../components/nav/NavigationBar';
import Footer from '../../components/footer/Footer';
import logo from '../../assets/images/icons/logo.png';
import logo2 from '../../assets/images/icons/logo2.png';
import wave2 from '../../assets/images/backgrounds/wave2.png';
import wave3 from '../../assets/images/backgrounds/wave3.png';
import course from '../../assets/images/icons/course.png';
import networking from '../../assets/images/icons/networking.png';
import clubs from '../../assets/images/icons/clubs.png';
import speakers from '../../assets/images/icons/speakers.png';
import wave4 from '../../assets/images/backgrounds/wave4.png';
import styles from './Home.module.css';

const Home = () => {
    useEffect(() => {
        document.title = 'Home | ConnextGen';
    }, []);

    return (
        <div>
            <NavigationBar />
            <div className={styles.landing}>
                <div className={styles.hero}>
                    <div className={styles.pane}>
                        <img src={logo2} alt='logo2'></img>
                        <h1>Enabling high school students to gain professional experience.</h1>
                        <Button id={styles.signUpButton} component={Link} to='/signup' variant='contained'>Sign Up</Button>
                    </div>
                    <div className={styles.heroImage}>
                        <img src={logo} alt='logo' className={styles.logo}></img>
                    </div>
                </div>
            </div>
            <div className={styles.mission}>
                <img src={wave2} alt='wave2'></img>
                <h1>Our Mission</h1>
                <p>ConnextGen empowers high school students to gain professional experience by providing a comprehensive platform for skills development, networking, and opportunity discovery. We aim to demystify the process of findings jobs and internships for every student.</p>
            </div>
            <div className={styles.background}>
                <img src={wave3} alt='wave3'></img>
                <div className={styles.aspects}>
                    <div className={styles.aspect}>
                        <div>
                            <h1>Online Course</h1>
                            <p>Utilizing ConnextGen’s online course, students will build crucial professional skills not taught in schools, such as building resumes, preparing for interviews, writing cover letters, and more.</p>
                        </div>
                        <div>
                            <img src={course} alt='course'></img>
                        </div>
                    </div>
                </div>
                <div className={styles.aspects}>
                    <div className={styles.aspect}>
                        <div>
                            <img src={networking} alt='networking'></img>
                        </div>
                        <div>
                            <h1>Student Networking</h1>
                            <p>Students will be able to connect with other peers and parents in ConnextGen that have similar interests and fields of expertise, allowing them to share opportunities and collaborate.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.aspects}>
                    <div className={styles.aspect}>
                        <div>
                            <h1>In-School Clubs</h1>
                            <p>Through clubs, students will gain access to the online course and networking platform. During club meetings, students will also able to receive mentoring from members of the ConnextGen team.</p>
                        </div>
                        <div>
                            <img src={clubs} alt='clubs'></img>
                        </div>
                    </div>
                </div>
                <div className={styles.aspects}>
                    <div className={styles.aspect}>
                        <div>
                            <img src={speakers} alt='speakers'></img>
                        </div>
                        <div>
                            <h1>Professional Speakers</h1>
                            <p>Students will be able to connect with other peers and parents in ConnextGen that have similar interests and fields of expertise, allowing them to share opportunities and collaborate.</p>
                        </div>
                    </div>
                </div>
                <img className={styles.wave4} src={wave4} alt='wave3'></img>
            </div>
            <div className={styles.help}>
                <h1>Interested In Helping?</h1>
                <p>Are you a student interested in joining our team or starting a ConnextGen club at your school? If so, fill out the form below!</p>
                <Button id={styles.helpButton} component={Link} to='https://docs.google.com/forms/d/e/1FAIpQLSc1znrRftbxtVVQRtDC03t6fnKH9o1jaMchdc3U16Xl9sk_Cw/viewform?usp=sf_link' variant='contained' target="_blank">I'm Interested</Button>
            </div>
            <Footer />
        </div>
    );
} 

export default Home;