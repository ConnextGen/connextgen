import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { validateEmail, validatePassword } from '../../utils/validationUtils';
import FormTextField from './FormTextField';
import { login } from '../../api';
import styles from './Form.module.css';

const LoginForm = () => {
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
        onSubmit: (values, { setSubmitting, setFieldError }) => {
            setTimeout(() => {
                console.log(values.email, values.password);
                login(values.email, values.password).then(response => {
                    alert(JSON.stringify(response, null, "\n"));
                }).catch(err => {
                    console.log(err.response.status);
                    setFieldError('email', 'Incorrect email or password');
                    setFieldError('password', 'Incorrect email or password');
                });
                setSubmitting(false);
            }, 400);
        }
    });
    return (
        <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.fields}>
                <FormTextField header='Email' identifier='email' formik={formik}/>
                <FormTextField header='Password' identifier='password' type='password' formik={formik}/>
            </div>
            <div className={styles.button}>
                <Button id={styles.logInButton} component={Link} to='/'variant='contained' type='submit'>Log In</Button>
                <h3>Don't have an account? <a href='signup'>Sign Up</a></h3>
            </div>
        </form>
    );
};

export default LoginForm;