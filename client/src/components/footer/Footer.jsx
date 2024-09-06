import logo from '../../assets/images/icons/logo.png';
import wave5 from '../../assets/images/backgrounds/wave5.png';
import instagram from '../../assets/images/icons/instagram.png';
import linkedin from '../../assets/images/icons/linkedin.png';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.background}>
            <img src={wave5} alt='wave5' className={styles.wave}></img>
            <div className={styles.footer}>
                <img src={logo} alt='logo' className={styles.logo}></img>
                <div>
                    <a href='https://www.instagram.com/connextgenproject/' target='_blank' rel='noreferrer'>
                        <img src={instagram} alt='instagram' className={styles.icon}></img>
                    </a>
                    <a href='https://www.linkedin.com/company/98410537/' target='_blank' rel='noreferrer'>
                        <img src={linkedin} alt='linkedin' className={styles.icon}></img>
                    </a>
                </div>
                <p>connextgenproject@gmail.com</p>
            </div>
        </div>
    );
};

export default Footer;