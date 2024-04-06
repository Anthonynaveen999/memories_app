import React,{useEffect,useState} from 'react'
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { Grow,Container,Grid,Paper,AppBar,TextField,Button } from '@mui/material';
import {useNavigate,useLocation} from 'react-router-dom';
import { MuiChipsInput } from 'mui-chips-input';
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import { getPosts,getPostBySearch } from '../../actions/posts';
import Pagination from '../Pagination';

function useQuery() {
   return new URLSearchParams(useLocation().search);
}
function Home(){
    const {classes} = useStyles();
   const dispatch = useDispatch();
   useEffect(() =>{
      dispatch(getPosts());
   },[dispatch]);
   const [currentId,setCurrentId] = useState(null);
   const query = useQuery();
   const Navigate = useNavigate();
   const page = query.get('page') || 1;
   const searchQuery = query.get('search');
   const [search,setSearch] = useState('');
   const [chips,setChips] = useState([]);
   const handleAddChip = (chip) => setChips([...chips,chip]);
   const handleDeleteChip = (deletedChip) => setChips( chips.filter((chip) => chip !== deletedChip));
   const searchPost = () => {
      if(search.trim()){
         dispatch(getPostBySearch(search,chips.join(',')))
      }else{
         Navigate('/');
      }
   }
  return (
    <div>
        <Grow in>
            <Container maxWidth="xl">
               <Grid container className={classes.mainContainer} justifyContent='space-between' alignItems='stretch' spacing={3}>
                  <Grid item xs={12} sm={6} md={9}>
                     <Posts setCurrentId={setCurrentId}/>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                     <AppBar position='static' className={classes.appBarSearch} color='inherit'>
                        <TextField 
                           name='Search' 
                           label='Search Memories' 
                           variant='outlined' 
                           fullWidth 
                           value={search} 
                           onKeyDown={(ev) => {
                              console.log(`Pressed keyCode ${ev.key}`);
                              if (ev.key === 'Enter') {
                                searchPost();
                                ev.preventDefault();
                              }
                            }}
                           onChange={(e)=>{setSearch(e.target.value)}}
                        />
                        <MuiChipsInput 
                           style={{margin: '10px 0' }}
                           value={chips}
                           label = "Search Tags"
                           fullWidth
                           onAddChip={handleAddChip}
                           onDeleteChip={handleDeleteChip}
                           variant='outlined'
                        />
                        <Button onClick={searchPost} color='primary' variant='contained'>Search</Button >
                     </AppBar>
                     <Form currentId={currentId} setCurrentId={setCurrentId}/>
                     <Paper  elevation={6}>
                        <Pagination />
                     </Paper>
                  </Grid>
               </Grid>
            </Container>
         </Grow>
    </div>
  )
}

export default Home