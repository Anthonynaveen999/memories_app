import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Container} from '@mui/material';
import Navbar from './components/Navbar/Navbar';
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