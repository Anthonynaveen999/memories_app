import React,{useState,useEffect} from "react";
import {useDispatch} from 'react-redux';
import { AppBar,Avatar,Button,Toolbar,Typography } from "@mui/material";
import useStyles from "./styles";
import memoriesLogo from "../../images/memories-Logo.png";
import memoriesText from "../../images/memories-Text.png"
import { Link,useNavigate,useLocation } from "react-router-dom";
import {jwtDecode} from 'jwt-decode';
function Navbar() {
    const {classes} = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('Profile')));
    const logOut = () =>{
        dispatch({type:'LOGOUT'});
        navigate('/')
        setUser(null);
    };
    useEffect(()=>{
        const token = user?.token;
        if(token){
            const decodedToken = jwtDecode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()) logOut();
        }
        setUser(JSON.parse(localStorage.getItem('Profile')));
    },[location])
    return(
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <Link to="/" className={classes.brandContainer}>
                <img src={memoriesText} alt="icon" height="45px"/>
                <img className={classes.image} src={memoriesLogo} alt='memories' height="40px"/>
            </Link>
            <Toolbar className={classes.toolbar}>
            { user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl || user.result.picture}>{user.result.name.charAt(0)}</Avatar>
                    <Typography variant="h6" className={classes.userName}>{user.result.name}</Typography>
                    <Button onClick={logOut} variant="contained" color="secondary" className={classes.purple}>Log Out</Button>
                </div>
                ):(
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
        
    );
    
}
export default Navbar;