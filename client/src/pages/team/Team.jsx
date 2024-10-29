import { useEffect } from 'react';
import NavigationBar from '../../components/nav/NavigationBar';
import Member from '../../components/member/Member';
import Logo from '../../assets/images/icons/logo.png';
import Armaan from '../../assets/images/team/armaan.jpg';
import Sid from '../../assets/images/team/sid.jpg';
import Harry from '../../assets/images/team/harry.png';
import Ben from '../../assets/images/team/ben.jpg';
import Eeshan from '../../assets/images/team/eeshan.jpg';
import Christian from '../../assets/images/team/christian.jpg';
import Ronan from '../../assets/images/team/ronan.jpg';
import Abhikhya from '../../assets/images/team/abhikhya.jpg';
import An from '../../assets/images/team/an.jpg';
import Rishi from '../../assets/images/team/rishi.jpg';
import Rohan from '../../assets/images/team/rohan.jpg';
import Daniel from '../../assets/images/team/daniel.jpg';
import Shivani from '../../assets/images/team/shivani.jpg';
import Jasmin from '../../assets/images/team/jasmin.jpg';
import Footer from '../../components/footer/Footer';
import styles from './Team.module.css';

const Team = () => {
    useEffect(() => {
        document.title = 'Team | ConnextGen';
    }, []);

    return (
        <div>
            <NavigationBar />
            <div className={styles.team}>
                <h1>Our Team</h1>
                <div className={styles.divisions}>
                    <div className={styles.division}>
                        <h2>Core Team</h2>
                        <div className={styles.members}>
                            <Member name='Armaan Priyadarshan' title='CEO' image={Armaan} />
                            <Member name='Sidharth Subbiah' title='CMO' image={Sid} />
                            <Member name='Jacob Jiang' title='CTO' image={Logo} />
                            <Member name='Ronan Pigeaud' title='COO' image={Ronan} />
                        </div>
                    </div>
                    <div className={styles.division}>
                        <h2>Outreach Team</h2>
                        <div className={styles.members}>
                            <Member name='Harry Zheng' image={Harry} />
                            <Member name='Benjamin Reitz' image={Ben} />
                            <Member name='Eshaan Shah' image={Eeshan} />
                            <Member name='Christian Riddle' image={Christian} />
                        </div>
                    </div>
                    <div className={styles.division}>
                        <h2>Fundraising Team</h2>
                        <div className={styles.members}>
                            <Member name='Abhikhya Sonti' image={Abhikhya} />
                            <Member name='An Tran' image={An} />
                        </div>
                    </div>
                    <div className={styles.division}>
                        <h2>Curriculum Team</h2>
                        <div className={styles.members}>
                            <Member name='Rishi Patel' image={Rishi} />
                            <Member name='Rohan Sarikonda' image={Rohan} />
                            <Member name='Daniel Shi' image={Daniel} />
                        </div>
                    </div>
                    <div className={styles.division}>
                        <h2>Social Media Team</h2>
                        <div className={styles.members}>
                            <Member name='Shivani Gupta' image={Shivani} />
                            <Member name='Jasmin Bella' image={Jasmin} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Team;