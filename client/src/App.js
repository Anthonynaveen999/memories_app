import React from 'react';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import {Container} from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
function App (){
   // const Navigate = useNavigate();
   const user = JSON.parse(localStorage.getItem('Profile'));
   return( 
      <BrowserRouter>
      <Container maxWidth="xl">
         <Navbar />
         <Routes>
            <Route path="/" element={<Navigate replace to="/posts" />} />
            <Route path='/posts' exact Component={Home}/>
            <Route path='/posts/search' exact Component={Home}/>
            <Route path='/posts/:id' exact Component={PostDetails}/>
            <Route path='/auth' exact Component={() => (!user ? <Auth /> : <Navigate replace to="/posts" />)}/> 
         </Routes>
      </Container>
      </BrowserRouter>
      
   );

}
export default App;