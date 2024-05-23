import React,{useState,useRef} from 'react'
import { Typography,TextField,Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import useStyles from "./styles"; 

const CommentSection = ({post}) => {
    const {classes} = useStyles();
    const [comments,setComments] = useState([0,1,2,3,4]);
    const [comment,setComment] = useState('');
    const handleClick = () => {
        
    }
    console.log(post);
  return (
    <div>
        <div className={classes.commentsOuterContainer}>
            <div className={classes.commentsInnerContainer}>
                <Typography gutterBottom variant='h6'>Comments</Typography>
                {
                    comments.map((c,i) => (
                        <Typography gutterBottom variant='subtitle1' key={i}>
                            comment {i}
                        </Typography>
                    ))
                }
            </div>
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
        </div>
    </div>
  )
}

export default CommentSection