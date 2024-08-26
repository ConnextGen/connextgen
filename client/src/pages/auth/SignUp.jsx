import { useEffect } from 'react';
import SignUpForm from '../../components/form/SignUpForm';
import styles from './Authentication.module.css';

const SignUp = () => {
    useEffect(() => {
        document.title = 'Sign Up | ConnextGen';
    }, []);

    return (
        <div className={styles.background}>
            <div className={styles.pane}>
                <h1>Sign Up</h1>
                <SignUpForm />
            </div>
        </div>
    );
}

export default SignUp;