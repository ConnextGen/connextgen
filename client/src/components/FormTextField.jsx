import { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import '../App.css';

const TextEntry = ({ header, identifier, type, formik }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="field-entry">
            {/* <FormLabel>{header}</FormLabel> */}
            <TextField
                type={type === 'password' && !isPasswordVisible ? 'password' : 'text'}
                fullWidth
                id={identifier}
                name={identifier}
                label={header}
                value={formik.values[identifier]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[identifier] && Boolean(formik.errors[identifier])}
                helperText={(formik.touched[identifier] && formik.errors[identifier]) || ' '}
                // FormHelperTextProps={{
                //     sx: {
                //         position: "absolute",
                //         bottom: "-1.5em",
                //     }
                // }}
                InputProps={{
                endAdornment: type === 'password' && (
                    <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={togglePasswordVisibility}
                        edge="end"
                    >
                        {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                    </InputAdornment>
                ),
                }}
            />
            {header === 'Password' && (
                <a href="#" className="link">Forgot Password?</a>
            )}
        </div>
    );
};

export default TextEntry;