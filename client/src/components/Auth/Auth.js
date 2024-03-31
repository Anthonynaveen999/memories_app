import React,{useState} from 'react';
import { Container,Paper,Avatar, Typography, Grid,Button } from '@mui/material';
import LockOutLinedIcon from "@mui/icons-material/LockOutlined";
import useStyles from './styles';
import Input from './Input';
const Auth = () => {
  const {classes}= useStyles();
  const [isSignUp,setIsSignUp] = useState(false);
  const [showPassword,setShowPassword] = useState(false);
  const handleSubmit = () =>{

  }
  const handleChange = () =>{
    
  }
  const switchMode = () =>{
    setIsSignUp((prevIsSignUp)=>!prevIsSignUp);
    handleShowPassword(false);
  }
  const handleShowPassword = () => setShowPassword((prevShowPassword) =>!prevShowPassword)
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutLinedIcon />
        </Avatar>
        <Typography variant='h6'>{isSignUp?'Sign Up':'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          {
            isSignUp && (
              <>
              <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half/>
              <Input name='firstName' label='First Name' handleChange={handleChange} half/>
              </>
            )
          }
          <Input name="email" label="Email Address" type="email" handleChange={handleChange}/>
          <Input name="password" label="Password" type={showPassword ? "text":"password"} handleChange={handleChange} handleShowPassword={handleShowPassword}/>
          { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
          </Grid>
          <Button type="submit" fullWidth className={classes.submit} variant="contained" color="primary">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Button onClick={switchMode} style={{color:"black"}}>
                {isSignUp ? 'Already have an account? Sign In' : `Don't have an account Sign Up` }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth