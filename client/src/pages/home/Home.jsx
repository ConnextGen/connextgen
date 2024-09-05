import { useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import NavigationBar from '../../components/nav/NavigationBar';
import Footer from '../../components/footer/Footer';
import Logo from '../../assets/images/icons/logo.png';
import Logo2 from '../../assets/images/icons/logo2.png';
import Wave2 from '../../assets/images/backgrounds/wave2.png';
import Wave3 from '../../assets/images/backgrounds/wave3.png';
import Course from '../../assets/images/icons/course.png';
import Networking from '../../assets/images/icons/networking.png';
import Clubs from '../../assets/images/icons/clubs.png';
import Speakers from '../../assets/images/icons/speakers.png';
import Wave4 from '../../assets/images/backgrounds/wave4.png';
import styles from './Home.module.css';

const Home = () => {
    useEffect(() => {
        document.title = 'Home | ConnextGen';
    }, []);

    return (
        <>
            <NavigationBar />
            <div className={styles.landing}>
                <div className={styles.hero}>
                    <div className={styles.pane}>
                        <img className={styles.heroText}src={Logo2} alt='logo2'></img>
                        <h1>Enabling high school students to gain professional experience.</h1>
                        <Button id={styles.signUpButton} component={Link} to='https://docs.google.com/forms/d/e/1FAIpQLSc1znrRftbxtVVQRtDC03t6fnKH9o1jaMchdc3U16Xl9sk_Cw/viewform?usp=sf_link' href='https://docs.google.com/forms/d/e/1FAIpQLSc1znrRftbxtVVQRtDC03t6fnKH9o1jaMchdc3U16Xl9sk_Cw/viewform?usp=sf_link' variant='contained'>Sign Up</Button>
                    </div>
                    <div className={styles.heroImage}>
                        <img src={Logo} alt='logo' className={styles.logo}></img>
                    </div>
                </div>
            </div>
            <HashLink to='/#mission' className={styles.arrowContainer}>
                <div className={styles.arrow}></div>
                <div className={styles.arrow}></div>
                <div className={styles.arrow}></div>
            </HashLink>
            <div className={styles.mission} id='mission'>
                <img className={styles.waveTop} src={Wave2} alt='wave2'></img>
                <h1>Our Mission</h1>
                <p>ConnextGen empowers high school students to gain professional experience by providing a comprehensive platform for skills development, networking, and opportunity discovery. We aim to demystify the process of finding jobs and internships for every student.</p>
            </div>
            <div className={styles.background}>
                <img className={styles.waveTop} src={Wave3} alt='wave3'></img>
                <div className={styles.aspects}>
                    <div className={[styles.aspect, styles.leftAspect].join(' ')}>
                        <div class={styles.aspectDescription}>
                            <h1>Online Course</h1>
                            <p>Utilizing ConnextGen’s online course, students will build crucial professional skills not taught in schools, such as building resumes, preparing for interviews, writing cover letters, and more.</p>
                        </div>
                        <div class={styles.aspectIcon}>
                            <img src={Course} alt='course'></img>
                        </div>
                    </div>
                </div>
                <div className={styles.aspects}>
                    <div className={[styles.aspect, styles.rightAspect].join(' ')}>
                        <div class={styles.aspectIcon}>
                            <img src={Networking} alt='networking'></img>
                        </div>
                        <div class={styles.aspectDescription}>
                            <h1>Student Networking</h1>
                            <p>Students will be able to connect with other peers and parents in ConnextGen that have similar interests and fields of expertise, allowing them to share opportunities and collaborate.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.aspects}>
                    <div className={[styles.aspect, styles.leftAspect].join(' ')}>
                        <div class={styles.aspectDescription}>
                            <h1>In-School Clubs</h1>
                            <p>Through clubs, students will gain access to the online course and networking platform. During club meetings, students will also able to receive mentoring from members of the ConnextGen team.</p>
                        </div>
                        <div class={styles.aspectIcon}>
                            <img src={Clubs} alt='clubs'></img>
                        </div>
                    </div>
                </div>
                <div className={styles.aspects}>
                    <div className={[styles.aspect, styles.rightAspect].join(' ')}>
                        <div class={styles.aspectIcon}>
                            <img src={Speakers} alt='speakers'></img>
                        </div>
                        <div class={styles.aspectDescription}>
                            <h1>Professional Speakers</h1>
                            <p>Students will be able to connect with other peers and parents in ConnextGen that have similar interests and fields of expertise, allowing them to share opportunities and collaborate.</p>
                        </div>
                    </div>
                </div>
                <img className={styles.waveBottom} src={Wave4} alt='wave4'></img>
            </div>
            <div className={styles.help}>
                <h1>Interested In Helping?</h1>
                <p>Are you a student interested in joining our team or starting a ConnextGen club at your school? If so, fill out the form below!</p>
                <Button id={styles.helpButton} component={Link} to='https://docs.google.com/forms/d/e/1FAIpQLSc1znrRftbxtVVQRtDC03t6fnKH9o1jaMchdc3U16Xl9sk_Cw/viewform?usp=sf_link' variant='contained' target="_blank">I'm Interested</Button>
            </div>
            <Footer />
        </>
    );
} 

export default Home;