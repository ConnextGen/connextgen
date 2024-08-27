import { useEffect } from 'react';
import NavigationBar from '../../components/nav/NavigationBar';
import Member from '../../components/team/Member';
import Armaan from '../../assets/images/team/armaan.jpg';
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
                            <Member name='Sidharth Subbiah' title='CMO' image='https://via.placeholder.com/150' />
                            <Member name='Jacob Jiang' title='CTO' image='https://via.placeholder.com/150' />
                        </div>
                    </div>
                    <div className={styles.division}>
                        <h2>Outreach Team</h2>
                        <div className={styles.members}>
                            <Member name='Harry Zheng' image='https://via.placeholder.com/150' />
                            <Member name='Benjamin Reitz' image='https://via.placeholder.com/150' />
                            <Member name='Eshaan Shah' title='CTO' image='https://via.placeholder.com/150' />
                            <Member name='Christian Riddle' title='CTO' image='https://via.placeholder.com/150' />
                        </div>
                    </div>
                    <div className={styles.division}>
                        <h2>Fundraising Team</h2>
                        <div className={styles.members}>
                            <Member name='Abhikhya Sonti' image='https://via.placeholder.com/150' />
                            <Member name='An Tran' image='https://via.placeholder.com/150' />
                        </div>
                    </div>
                    <div className={styles.division}>
                        <h2>Curriculum Team</h2>
                        <div className={styles.members}>
                            <Member name='Rohan Sarikonda' image='https://via.placeholder.com/150' />
                            <Member name='Daniel Shi' image='https://via.placeholder.com/150' />
                        </div>
                    </div>
                    <div className={styles.division}>
                        <h2>Social Media Team</h2>
                        <div className={styles.members}>
                            <Member name='Shivani Gupta' image='https://via.placeholder.com/150' />
                            <Member name='Jasmin Bella' image='https://via.placeholder.com/150' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Team;