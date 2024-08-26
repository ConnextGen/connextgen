import { ReactComponent as Arrow } from '../../assets/images/icons/arrow.svg';
import logo from '../../assets/images/icons/logo.png';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
    return (
        <div className={styles.background}>
            <div className={styles.nav}>
                <div>
                    <a href="/"><img src={logo} className={styles.logo} alt='logo'></img></a>
                    <a href="/team">Team</a>
                    <a target='_blank' rel='noreferrer' href='https://docs.google.com/forms/d/e/1FAIpQLSc1znrRftbxtVVQRtDC03t6fnKH9o1jaMchdc3U16Xl9sk_Cw/viewform?usp=sf_link'>
                        Join <Arrow className={styles.arrow} />
                    </a>
                    <a href="mailto:connextgenproject@gmail.com">
                        Contact <Arrow className={styles.arrow} />
                    </a>
                </div>
                <div>
                    <a href='/login'>Log In</a>
                    <a href='/signup' className={styles.signUp}>Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;