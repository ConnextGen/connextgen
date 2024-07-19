import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/system';

const CustomInputLabel = styled(InputLabel)({
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 300
});

const Dropdown = ({ header, options }) => {
    return (
        <div className="field-entry">
            <FormControl fullWidth>
                <CustomInputLabel>{header}</CustomInputLabel>
                <Select label={header}>
                    {options.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default Dropdown;