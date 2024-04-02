import React from 'react';
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const Input = ({half,name,label,type,handleChange,handleShowPassword,autoFocus}) => (
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField 
            name={name}
            onChange={handleChange}
            variant='outlined'
            required
            fullWidth
            autoFocus={autoFocus}
            label={label}
            type={type}
            InputProps={name === 'password' ? {
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton onClick={handleShowPassword}>
                            {type === "password" ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                ), 
            }:null}
        />
    </Grid>
  );

export default Input