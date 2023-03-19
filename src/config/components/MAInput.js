import { TextField } from '@mui/material'
import React from 'react'

function MAInput(props) {
    const {
        label,
        type,
        variant,
        onChange,
        required,
        disabled,
        value,
        rows,
        multiline,
        width,
        className
    } = props
    return (
        <TextField
            className={className}
            id="outlined-basic"
            type={type}
            label={label}
            onChange={onChange}
            required={required}
            value={value ? value : ""}
            disabled={disabled}
            sx={{ width: `${width}` }}
            variant={variant ? variant : "standard"}
            multiline={multiline}
            rows={rows}
        />
    )
}

export default MAInput