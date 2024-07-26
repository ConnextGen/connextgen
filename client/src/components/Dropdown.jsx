import { styled } from '@mui/system';
import { FormHelperText, MenuItem, FormControl, InputLabel, Select } from '@mui/material';


const CustomInputLabel = styled(InputLabel)({
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 300
});


const Dropdown = ({ header, identifier, options, formik }) => {
    return (
        <div className="field-entry">
            <FormControl fullWidth error={formik.touched[identifier] && Boolean(formik.errors[identifier])}>
                <CustomInputLabel>{header}</CustomInputLabel>
                <Select
                    label={header}
                    id={identifier}
                    name={identifier}
                    value={formik.values[identifier]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched[identifier] && Boolean(formik.errors[identifier])}
                >
                    {options.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
                {
                    <FormHelperText
                        sx={{
                            color: formik.touched[identifier] && formik.errors[identifier] ? 'error.main' : 'text.secondary',
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