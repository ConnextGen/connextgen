import { FormHelperText, MenuItem, FormControl, Select } from '@mui/material';


const Dropdown = ({ header, identifier, options, formik }) => {
    return (
        <div className="field">
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
                        "& fieldset": {
                            borderTop: 'none',
                            borderLeft: 'none',
                            borderRight: 'none',
                            borderRadius: '5px',
                            borderColor: '#294C60',
                        },
                      
                        "& .MuiSelect-select": {
                            backgroundColor: 'rgba(233, 237, 239, 0.5)',
                            fontFamily: 'Quicksand, sans-serif',
                            color: '#294C60',
                        },
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