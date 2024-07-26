import { useState } from 'react';
import { TextField, InputAdornment, IconButton, FormLabel, Box, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Form, Formik, useFormik } from "formik";
import '../App.css';
import FormTextField from './FormTextField';
import Dropdown from './Dropdown';

import { validateEmail, validatePassword, requireField } from '../utils/validationUtils';
import { signup } from "../api";

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

            validateEmail(values, errors, "email");
            validatePassword(values, errors, "password");
            validatePassword(values, errors, "confirmPassword");

            if (values.password !== values.confirmPassword) {
                errors.password = "Passwords must match"
                errors.confirmPassword = "Passwords must match"
            }

            requireField(values, errors, "firstName");
            requireField(values, errors, "lastName");
            requireField(values, errors, "school");

            return errors;
        },
        onSubmit: (values, { setSubmitting, setFieldError }) => {
            setTimeout(() => {
                console.log(values.email, values.password);
                signup(values.firstName, values.lastName, values.school, values.email, values.password).then(response => {
                    alert(JSON.stringify(response, null, "\n"));
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
                <div className="names">
                    <FormTextField header="First Name" identifier="firstName" formik={formik}/>
                    <FormTextField header="Last Name" identifier="lastName" formik={formik}/>
                </div>
                <Dropdown header="Select School" identifier="school" options={['School 1', 'School 2', 'School 3']} formik={formik}/>
                <FormTextField header="Email" identifier="email" formik={formik}/>
                <FormTextField header="Create Password" identifier="password" type="password" formik={formik}/>
                <FormTextField header="Confirm Password" identifier="confirmPassword" type="password" formik={formik}/>

                <Button id="sign-up-button" variant="contained" type="submit">Sign Up</Button>
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

export default SignUpForm;