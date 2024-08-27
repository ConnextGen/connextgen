import { FormHelperText, MenuItem, FormControl, Select } from '@mui/material';
import styles from './Form.module.css';


const Dropdown = ({ header, identifier, options, formik }) => {
    return (
        <div className={styles.field}>
            <h3>{header}</h3>
            <FormControl fullWidth error={formik.touched[identifier] && Boolean(formik.errors[identifier])}>
                <Select
                    label={header}
                    id={identifier}
                    name={identifier}
                    value={formik.values[identifier]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched[identifier] && Boolean(formik.errors[identifier])}
                    sx={{
                        '& fieldset': {
                            borderTop: 'none',
                            borderLeft: 'none',
                            borderRight: 'none',
                            borderRadius: '5px',
                            borderColor: '#294C60',
                        },
                      
                        '& .MuiSelect-select': {
                            padding: '1.3vh 0.8vw',
                            backgroundColor: 'rgba(233, 237, 239, 0.5)',
                            fontFamily: 'Quicksand, sans-serif',
                            color: '#294C60',
                        },
                        '@media (max-width: 768px)': {
                            '.MuiSelect-select': {
                                padding: '1vh 3vw',
                                fontSize: '3.5vw',
                            },
                        }
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option} value={option} sx={{ fontFamily: 'Quicksand, sans-serif' }}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
                {
                    <FormHelperText
                        sx={{
                            color: formik.touched[identifier] && formik.errors[identifier] ? 'error.main' : 'text.secondary',
                            fontFamily: 'Quicksand, sans-serif',
                            margin: '0px',
                        }}
                    >
                        {formik.touched[identifier] ? (formik.errors[identifier] || ' ') : ' '}
                    </FormHelperText>
                }
            </FormControl>
        </div>
    );
};


export default Dropdown;