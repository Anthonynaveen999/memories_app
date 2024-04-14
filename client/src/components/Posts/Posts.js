import React from "react";
import Post from './Post/Post';
import { Grid,CircularProgress } from "@mui/material";
import useStyles from './styles';
import {  useSelector } from "react-redux";
function Posts({setCurrentId}){
    const { posts,isLoading } = useSelector((state) => state.posts)
   const {classes} = useStyles();
   if( !posts.length && !isLoading) return 'No Posts'
    return(
        isLoading ? < CircularProgress/> : 
        <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
            {
                posts.map((post) =>(
                    <Grid item key={post._id} xs={12} sm={12} md={6} lg={3}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))
            }

        </Grid>
    )
}
export default Posts;