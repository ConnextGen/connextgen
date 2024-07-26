// import { useState } from 'react';
import { Box, Button } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Form, Formik, useFormik } from "formik";
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
        <>
        <Box>

            <form onSubmit={formik.handleSubmit}>
                <FormTextField header="Email" identifier="email" formik={formik}/>
                <FormTextField header="Password" identifier="password" type="password" formik={formik}/>
                <Button id="login-button" variant="contained" type="submit">Login</Button>
            </form>

        </Box>
        </>
    );

    // return (
    //     <div className="field-entry">
    //         <FormLabel>{header}</FormLabel>
    //         <TextField
    //             type={header === 'Password' && !isPasswordVisible ? 'password' : 'text'}
    //             fullWidth
    //             InputProps={{
    //             endAdornment: header === 'Password' && (
    //                 <InputAdornment position="end">
    //                 <IconButton
    //                     aria-label="toggle password visibility"
    //                     onClick={togglePasswordVisibility}
    //                     edge="end"
    //                 >
    //                     {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
    //                 </IconButton>
    //                 </InputAdornment>
    //             ),
    //             }}
    //         />
    //         {header === 'Password' && (
    //             <a href="#" className="link">Forgot Password?</a>
    //         )}
    //     </div>
    // );
};

export default LoginForm;