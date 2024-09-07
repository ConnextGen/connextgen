import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import FormTextField from './FormTextField';
import Dropdown from './Dropdown';
import { validateEmail, validatePassword, requireField } from '../../utils/validationUtils';
import { signUp } from '../../api';
import styles from './Form.module.css';

const SignUpForm = () => {
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
        onSubmit: (values, { setSubmitting, setFieldError }) => {
            setTimeout(() => {
                console.log(values.email, values.password);
                signUp(values.firstName, values.lastName, values.school, values.email, values.password).then(response => {
                    alert(JSON.stringify(response, null, '\n'));
                }).catch(err => {
                    console.log(err.response.status);
                });
                setSubmitting(false);
            }, 400);
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
                    <Button id={styles.signUpButton} component={Link} to='/login' variant='contained' type='submit'>Sign Up</Button>
                    <h3>Already have an account? <a href='login'>Log In</a></h3>
                </div>
            </form>

        </Box>
        </>
    );
};

export default SignUpForm;