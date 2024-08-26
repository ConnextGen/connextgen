import { useEffect } from 'react';
import NavigationBar from '../../components/nav/NavigationBar';
import Member from '../../components/team/Member';
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
                            <Member name='Armaan Priyadarshan' title='CEO' image='https://via.placeholder.com/150' />
                            <Member name='Sidharth Subbiah' title='CMO' image='https://via.placeholder.com/150' />
                            <Member name='Jacob Jiang' title='CTO' image='https://via.placeholder.com/150' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Team;