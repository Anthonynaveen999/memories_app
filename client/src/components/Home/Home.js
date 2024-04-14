import React,{useState} from 'react'
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { Grow,Container,Grid,Paper,AppBar,TextField,Button } from '@mui/material';
import {useNavigate,useLocation} from 'react-router-dom';
import { MuiChipsInput } from 'mui-chips-input';
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import {getPostsBySearch } from '../../actions/posts';
import Pagination from '../Pagination';

function useQuery() {
   return new URLSearchParams(useLocation().search);
}
function Home(){
    const {classes} = useStyles();
   const dispatch = useDispatch();
   const [currentId,setCurrentId] = useState(null);
   const query = useQuery();
   const Navigate = useNavigate();
   const page = query.get('page') || 1;
   const searchQuery = query.get('searchQuery');
   const [search,setSearch] = useState('');
   const [tags,setTags] = useState([]);
   const handleAddTag = (tag) => setTags([...tags,tag]);
   const handleDeleteTag = (deletedTag) => setTags( tags.filter((tag) => tag !== deletedTag));
   const searchPost = () => {
      if(search.trim() || tags){
         dispatch(getPostsBySearch({search,tags : tags.join(',')}));
         Navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
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
                              if (ev.key === 'Enter') {
                                searchPost();
                                ev.preventDefault();
                              }
                            }}
                           onChange={(e)=>{setSearch(e.target.value)}}
                        />
                        <MuiChipsInput 
                           style={{margin: '10px 0' }}
                           value={tags}
                           label = "Search Tags"
                           fullWidth
                           onAddChip={handleAddTag}
                           onDeleteChip={handleDeleteTag}
                           variant='outlined'
                        />
                        <Button  onClick={searchPost} color='primary' variant='contained'>Search</Button >
                     </AppBar>
                     <Form currentId={currentId} setCurrentId={setCurrentId}/>
                     { (!searchQuery && !tags.length) && (
                        <Paper  elevation={6} className={classes.pagination}>
                           <Pagination page={page} />
                        </Paper>
                     )} 
                  </Grid>
               </Grid>
            </Container>
         </Grow>
    </div>
  )
}

export default Home