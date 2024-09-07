import { ReactComponent as Arrow } from '../../assets/images/icons/arrow.svg';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Logo from '../../assets/images/icons/logo.png';
import Profile from '../../assets/images/icons/profile.png';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
    const { state, logOut } = useAuth();
    
    return (
        <div className={styles.background}>
            <div className={styles.nav}>
                <div>
                    <a href='/'><img src={Logo} className={styles.logo} alt='logo'></img></a>
                    <a href='/#/team'>Team</a>
                    <a target='_blank' rel='noreferrer' href='https://docs.google.com/forms/d/e/1FAIpQLSc1znrRftbxtVVQRtDC03t6fnKH9o1jaMchdc3U16Xl9sk_Cw/viewform?usp=sf_link' className={styles.hide}>
                        Join <Arrow className={styles.arrow} />
                    </a>
                    <a href='mailto:connextgenproject@gmail.com' className={styles.hide}>
                        Contact <Arrow className={styles.arrow} />
                    </a>
                </div>
                <div>
                    {state.isAuthenticated ? (
                        <>
                            <a onClick={logOut} className={styles.logout}>Log Out</a>
                            <img src={Profile} className={styles.profile} alt='Profile' />
                        </>
                    ) : (
                        <>
                            <Link to='/login'>Log In</Link>
                            <Link to='/signup' className={styles.signUp}>Sign Up</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;