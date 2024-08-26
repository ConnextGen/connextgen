import { useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import NavigationBar from '../../components/nav/NavigationBar';
import logo from '../../assets/images/icons/logo.png';
import logo2 from '../../assets/images/icons/logo2.png';
import wave2 from '../../assets/images/backgrounds/wave2.png';
import wave3 from '../../assets/images/backgrounds/wave3.png';
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
            <div className={styles.aspects}>
                <img src={wave3} alt='wave3'></img>
            </div>
        </div>
    );
}

export default Home;