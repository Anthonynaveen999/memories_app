import React,{useEffect,useState} from 'react'
import useStyles from '../../styles';
import { useDispatch } from 'react-redux';
import { Grow,Container,Grid } from '@mui/material';
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import { getPosts } from '../../actions/posts';
function Home(){
    const {classes} = useStyles();
   const dispatch = useDispatch();
   useEffect(() =>{
      dispatch(getPosts());
   },[dispatch]);
   const [currentId,setCurrentId] = useState(null);
  return (
    <div>
        <Grow in>
            <Container>
               <Grid container className={classes.mainContainer} justifyContent='space-between' alignItems='stretch' spacing={3}>
                  <Grid item xs={12} sm={7}>
                     <Posts setCurrentId={setCurrentId}/>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <Form currentId={currentId} setCurrentId={setCurrentId}/>
                  </Grid>
               </Grid>
            </Container>
         </Grow>
    </div>
  )
}

export default Home