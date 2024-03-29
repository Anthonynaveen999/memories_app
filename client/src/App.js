import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Container} from '@mui/material';
// import Posts from './components/Posts/Posts';
// import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
// import {getPosts} from './actions/posts';
// import useStyles from './styles';
// import { useDispatch } from 'react-redux';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
function App (){
   return( 
      <BrowserRouter>
      <Container maxWidth="lg">
         <Navbar />
         <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/auth' exact Component={Auth}/> 
         </Routes>
      </Container>
      </BrowserRouter>
      
   );

}
export default App;