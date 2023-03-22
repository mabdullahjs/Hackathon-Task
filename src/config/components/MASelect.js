import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MASelect(props) {
    const {  option , onChange , value } = props

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Age"
                    onChange={onChange}
                >
                    {option.map((item , index)=>{
                        return <MenuItem key={index} value={item.value}>{item.option}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}