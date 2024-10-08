import Logo from '../../assets/images/icons/logo.png';
import Wave5 from '../../assets/images/backgrounds/wave5.png';
import Instagram from '../../assets/images/icons/instagram.png';
import Linkedin from '../../assets/images/icons/linkedin.png';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <img src={Wave5} alt='wave5' className={styles.wave}></img>
            <div className={styles.footer}>
                <img src={Logo} alt='logo' className={styles.logo}></img>
                <div>
                    <a href='https://www.instagram.com/connextgenproject/' target='_blank' rel='noreferrer'>
                        <img src={Instagram} alt='instagram' className={styles.icon}></img>
                    </a>
                    <a href='https://www.linkedin.com/company/connextgenproject/' target='_blank' rel='noreferrer'>
                        <img src={Linkedin} alt='linkedin' className={styles.icon}></img>
                    </a>
                </div>
                <p>connextgenproject@gmail.com</p>
            </div>
        </div>
    );
};

export default Footer;