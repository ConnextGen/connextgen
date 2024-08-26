import { useEffect } from 'react';
import LoginForm from '../../components/form/LoginForm';
import styles from './Authentication.module.css';

const Login = () => {
    useEffect(() => {
        document.title = 'Log In | ConnextGen';
    }, []);

    return (
        <div className={styles.background}>
            <div className={styles.pane}>
                <h1>Welcome Back</h1>
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;