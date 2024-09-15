import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from '../../utils/validationUtils';
import FormTextField from './FormTextField';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Form.module.css';

const LoginForm = () => {
    const { logIn } = useAuth();
    const navigate = useNavigate();
    
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: values => {
            const errors = {};

            validateEmail(values, errors, 'email');
            validatePassword(values, errors, 'password');

            return errors;
        },
        onSubmit: async (values, { setSubmitting, setFieldError }) => {
            try {
                const response = await logIn(values.email, values.password);
                console.log('Logged in:', response);
                navigate('/');
            } catch (err) {
                console.error(err);
                setFieldError('email', 'Incorrect email or password');
                setFieldError('password', 'Incorrect email or password');
            } finally {
                setSubmitting(false);
            }
        }
    });

    return (
        <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.fields}>
                <FormTextField header='Email' identifier='email' formik={formik}/>
                <FormTextField header='Password' identifier='password' type='password' formik={formik}/>
            </div>
            <div className={styles.button}>
                <Button id={styles.logInButton} variant='contained' type='submit'>Log In</Button>
                <h3>Don't have an account? <Link to='/signup'>Sign Up</Link></h3>
            </div>
        </form>
    );
};

export default LoginForm;