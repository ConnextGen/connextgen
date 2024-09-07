import { Box, Button } from '@mui/material';
import { useFormik } from 'formik';
import { Link,useNavigate } from 'react-router-dom';
import FormTextField from './FormTextField';
import Dropdown from './Dropdown';
import { validateEmail, validatePassword, requireField } from '../../utils/validationUtils';
import { signUp } from '../../api';
import { useAuth } from '../../context/AuthContext';
import styles from './Form.module.css';

const SignUpForm = () => {
    const { logIn } = useAuth();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            school: '', 
            email: '',
            password: '',
            confirmPassword: '',
        },
        validate: values => {
            const errors = {};

            validateEmail(values, errors, 'email');
            validatePassword(values, errors, 'password');
            validatePassword(values, errors, 'confirmPassword');

            if (values.password !== values.confirmPassword) {
                errors.password = 'Passwords must match'
                errors.confirmPassword = 'Passwords must match'
            }

            requireField(values, errors, 'firstName');
            requireField(values, errors, 'lastName');
            requireField(values, errors, 'school');

            return errors;
        },
        onSubmit: async (values, { setSubmitting, setFieldError }) => {
            try {
                const response = await signUp(values.firstName, values.lastName, values.school, values.email, values.password);
                console.log('Signed up:', response);
                await logIn(values.email, values.password);
                navigate('/');
            } catch (err) {
                console.error(err);
                setFieldError('confirmPassword', 'Sign-up failed');
            } finally {
                setSubmitting(false);
            }
        }
    });

    return (
        <>
        <Box>

            <form onSubmit={formik.handleSubmit}>
                <div className={styles.fields}>
                    <div className={styles.names}>
                        <FormTextField header='First Name' identifier='firstName' formik={formik}/>
                        <FormTextField header='Last Name' identifier='lastName' formik={formik}/>
                    </div>
                    <Dropdown header='Select School' identifier='school' options={['School 1', 'School 2', 'School 3']} formik={formik}/>
                    <FormTextField header='Email' identifier='email' formik={formik}/>
                    <FormTextField header='Create Password' identifier='password' type='password' formik={formik}/>
                    <FormTextField header='Confirm Password' identifier='confirmPassword' type='password' formik={formik}/>
                </div>
                <div className={styles.button}>
                    <Button id={styles.signUpButton} variant='contained' type='submit'>Sign Up</Button>
                    <h3>Already have an account? <Link to='/login'>Log In</Link></h3>
                </div>
            </form>

        </Box>
        </>
    );
};

export default SignUpForm;