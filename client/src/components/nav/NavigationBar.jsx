import { ReactComponent as Arrow } from '../../assets/images/icons/arrow.svg';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Logo from '../../assets/images/icons/logo.png';
import Profile from '../../assets/images/icons/profile.png';
import styles from './NavigationBar.module.css';

const NavigationBar = ({ isSolidBackground }) => {
    const { state, logOut } = useAuth();
    
    return (
        <div className={isSolidBackground ? styles.solidBackground : styles.background}>
            <div className={styles.nav}>
                <div>
                    <Link to='/'><img src={Logo} className={styles.logo} alt='logo'></img></Link>
                    {state.isAuthenticated ? <Link to='/course'>Course</Link> : null}
                    <Link to='/team'>Team</Link>
                    <Link to='https://docs.google.com/forms/d/e/1FAIpQLSc1znrRftbxtVVQRtDC03t6fnKH9o1jaMchdc3U16Xl9sk_Cw/viewform?usp=sf_link' target='_blank' rel='noreferrer' className={styles.hide}>
                        Join <Arrow className={styles.arrow} />
                    </Link>
                    <Link to='mailto:connextgenproject@gmail.com' className={styles.hide}>
                        Contact <Arrow className={styles.arrow} />
                    </Link>
                </div>
                <div>
                    {state.isAuthenticated ? (
                        <>
                            <Link to='/login' onClick={logOut} className={styles.logout}>Log Out</Link>
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