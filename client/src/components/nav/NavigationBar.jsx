import { ReactComponent as Arrow } from '../../assets/images/icons/arrow.svg';
import { HashLink } from 'react-router-hash-link';
import { useAuth } from '../../contexts/AuthContext';
import Logo from '../../assets/images/icons/logo.png';
import Profile from '../../assets/images/icons/profile.png';
import styles from './NavigationBar.module.css';

const NavigationBar = ({ isSolidBackground, isLesson, toggleSidePanel }) => {
    const { state, logOut } = useAuth();
    
    return (
        <div className={isSolidBackground ? styles.solidBackground : styles.background}>
            <div className={styles.nav}>
                <div>
                    <HashLink to='/'><img src={Logo} className={styles.logo} alt='logo'></img></HashLink>
                    {state.isAuthenticated ? <HashLink to='/course'>Course</HashLink> : null}
                    {
                        isLesson ? (
                            <> 
                                <HashLink onClick={toggleSidePanel}>Unit</HashLink>
                            </>
                        ) : (
                            <>
                                <HashLink to='/team'>Team</HashLink>
                                <HashLink to='https://docs.google.com/forms/d/e/1FAIpQLSc1znrRftbxtVVQRtDC03t6fnKH9o1jaMchdc3U16Xl9sk_Cw/viewform?usp=sf_link' target='_blank' rel='noreferrer' className={styles.hide}>
                                    Join <Arrow className={styles.arrow} />
                                </HashLink>
                                <HashLink to='mailto:connextgenproject@gmail.com' className={styles.hide}>
                                    Contact <Arrow className={styles.arrow} />
                                </HashLink>
                            </>
                        )
                    }
                </div>
                <div>
                    {state.isAuthenticated ? (
                        <>
                            <HashLink to='/login' onClick={logOut} className={styles.logout}>Log Out</HashLink>
                            <img src={Profile} className={styles.profile} alt='Profile' />
                        </>
                    ) : (
                        <>
                            <HashLink to='/login'>Log In</HashLink>
                            <HashLink to='/signup' className={styles.signUp}>Sign Up</HashLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;