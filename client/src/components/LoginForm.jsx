import { Button } from '@mui/material';
import { useFormik } from "formik";
import '../App.css';
import { validateEmail, validatePassword } from '../utils/validationUtils';

import FormTextField from "./FormTextField";

import { login } from '../api';

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: values => {
            const errors = {};

            validateEmail(values, errors, "email");
            validatePassword(values, errors, "password");

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
        <form class="form" onSubmit={formik.handleSubmit}>
            <div class="fields">
                <FormTextField header="Email" identifier="email" formik={formik}/>
                <FormTextField header="Password" identifier="password" type="password" formik={formik}/>
            </div>
            <div class="button">
                <Button id="login-button" variant="contained" type="submit">Log In</Button>
                <h3>Don't have an account? <a href='signup' className="link">Sign Up</a></h3>
            </div>
        </form>
    );
};

export default LoginForm;