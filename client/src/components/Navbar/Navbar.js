import React,{useState,useEffect} from "react";
import {useDispatch} from 'react-redux';
import { AppBar,Avatar,Button,Toolbar,Typography } from "@mui/material";
import useStyles from "./styles";
import memories from "../../images/memories.png";
import { Link,useNavigate,useLocation } from "react-router-dom";
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
        const token_id = user?.token_id;

        setUser(JSON.parse(localStorage.getItem('Profile')));
    },[location])
    console.log(user);
    return(
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className={classes.image} src={memories} alt='memories' height="60"/>
            </div>
            <Toolbar className={classes.toolbar}>
            { user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.name} src={user.imageUrl}>{user.name.charAt(0)}</Avatar>
                    <Typography variant="h6" className={classes.userName}>{user.name}</Typography>
                    <Button onClick={logOut} variant="contained" color="secondary" className={classes.logout}>Log Out</Button>
                </div>
                ):(
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
        
    );
    
}
export default Navbar;