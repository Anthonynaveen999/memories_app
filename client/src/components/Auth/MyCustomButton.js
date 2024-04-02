import React from 'react'
import Icon from './icon'
import { useGoogleLogin } from '@react-oauth/google';
import  useStyles  from './styles';
import { Button } from '@mui/material';
const MyCustomButton = () => {
  const {classes} = useStyles();
    const login = useGoogleLogin({
        // onSuccess: tokenResponse => console.log(tokenResponse),
        onSuccess: codeResponse => console.log(codeResponse),
  flow: 'auth-code',
      });
  return (
    <Button
                  className = {classes.googleButton}
                  color = "primary"
                  fullWidth
                  onClick={login}
                  startIcon={<Icon />}
                  disabled={useGoogleLogin.disabled}
                  variant="contained"
                  >Google Sign In
                </Button>
  )
}

export default MyCustomButton