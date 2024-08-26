import { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styles from './Form.module.css';

const FormTextField = ({ header, identifier, type, formik }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className={styles.field}>
            <h3>{header}</h3>
            <TextField
                type={type === 'password' && !isPasswordVisible ? 'password' : 'text'}
                fullWidth
                id={identifier}
                name={identifier}
                value={formik.values[identifier]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[identifier] && Boolean(formik.errors[identifier])}
                helperText={(formik.touched[identifier] && formik.errors[identifier]) || ' '}
                InputProps={{
                endAdornment: type === 'password' && (
                    <InputAdornment position='end'>
                    <IconButton
                        aria-label='toggle password visibility'
                        onClick={togglePasswordVisibility}
                        edge='end'
                    >
                        {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                    </InputAdornment>
                ),
                }}
                sx={{
                    '& fieldset': {
                        borderTop: 'none',
                        borderLeft: 'none',
                        borderRight: 'none',
                        borderRadius: '5px',
                        borderColor: '#294C60',
                    },
                  
                    '& .MuiInputBase-root': {
                        height: '50px',
                        backgroundColor: 'rgba(233, 237, 239, 0.5)',
                        fontFamily: 'Quicksand, sans-serif',
                        color: '#294C60',
                    },

                    '.MuiFormHelperText-root': {
                        fontFamily: 'Quicksand, sans-serif',
                        margin: '0px',
                    }
                }}
            />
        </div>
    );
};

export default FormTextField;