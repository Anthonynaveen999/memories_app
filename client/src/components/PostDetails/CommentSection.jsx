import React,{useState,useRef} from 'react'
import { Typography,TextField,Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import useStyles from "./styles"; 
import { commentPost } from "../../actions/posts";
const CommentSection = ({post}) => {
    const {classes} = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('Profile'));
    const [comments,setComments] = useState(post?.comments || []);
    const [comment,setComment] = useState('');
    const commentsRef = useRef();
    const handleClick = async () => {
        const newComments = await dispatch(commentPost(`${user?.result?.name}: ${comment}`, post._id));
        setComments(newComments);
        setComment('');
        if (commentsRef.current) {
            commentsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }
  return (
    <div>
        <div className={classes.commentsOuterContainer}>
            <div className={classes.commentsInnerContainer}>
                <Typography gutterBottom variant='h6'>Comments</Typography>
                {
                    comments.map((c,i) => (
                        <Typography gutterBottom variant='subtitle1' key={i}>
                            <strong>{c.split(':')[0]}</strong>
                            {c.split(":")[1]}
                        </Typography>
                    ))
                }
                <div ref={commentsRef} />
            </div>
            { user?.result?.name && (
                <div style={{width:'70%'}}>
                <Typography gutterBottom variant='h6'>Write a Comment</Typography>
                <TextField 
                rows={4}
                fullWidth
                variant='outlined'
                multiline
                label='Comment'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                />
                <Button style={{marginTop: '10px'}} fullWidth disabled={!comment} color='primary' variant='contained'onClick={handleClick} >
                    comment
                </Button>
                </div>
            )}
        </div>
    </div>
  )
}

export default CommentSection