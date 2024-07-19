import { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import '../App.css';

const TextEntry = ({ header }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="text-entry">
            <h3>{header}</h3>
            <TextField
                type={header === 'Password' && !isPasswordVisible ? 'password' : 'text'}
                fullWidth
                InputProps={{
                endAdornment: header === 'Password' && (
                    <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={togglePasswordVisibility}
                        edge="end"
                    >
                        {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
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