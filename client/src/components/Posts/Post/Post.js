import React from "react";
import useStyles from './styles';
import { Card,CardActions,CardMedia,CardContent,Typography,ButtonBase,Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';
import moment from "moment";
import {useDispatch } from "react-redux";
import { deletePost,likePost } from "../../../actions/posts";
import { useNavigate } from "react-router-dom";

function Post({post,setCurrentId}){
   const {classes} = useStyles();
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('Profile'));
    const Like = () => {
        if(post.likes.length > 0){
            return post.likes.find((like) => like === (user?.result?._id || user?.result?.sub))
            ? (
            <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length}&nbsp;{ `Like${post.likes.length>1 ? 's' : ''}` }</>
             ) : (
                <><ThumbUpAltOutlined fontSize="small"/>&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
             );
        }
        return <><ThumbUpAltOutlined fontSize="small"/>&nbsp;Like</>;

    }
    const openPost = () => {
        Navigate(`/posts/${post._id}`)
    }
    return(
        <Card className={classes.card} raised elevation={6}>
            <ButtonBase className={classes.cardAction} component="span" name="test" onClick={openPost}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6" >{post.name}</Typography>
                <Typography variant="body2" >{moment(post.createdAt).fromNow() }</Typography>
            </div>
            </ButtonBase>
            {
                    (user?.result?._id === post.creator || user?.result?.sub === post.creator) && 
                   ( <div className={classes.overlay2}>
                <Button 
                style={{color:'white'}} 
                size="small" 
                onClick={()=>{setCurrentId(post._id)}}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
                </div> )
                    
            }
            <ButtonBase className={classes.cardAction} component="span" name="test" onClick={openPost}>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag)=> (`#${tag} `))}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent >
                <Typography variant="body2" color="textSecondary" component="p">{post.message.split(' ').splice(0, 10).join(' ')}...</Typography>
            </CardContent>
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result}  onClick={() => {dispatch(likePost(post._id))}}>
                    <Like />
                </Button>
                {
                    (user?.result?._id === post.creator || post.creator === user?.result?.sub) && 
                    (<Button size="small" color="primary" disabled={!user?.result} onClick={() => {dispatch(deletePost(post._id))}}>
                    <DeleteIcon fontSize="small" />
                    Delete
                    </Button>)
                }
                
            </CardActions>
        </Card>
    )
}


export default Post;