 import React from 'react';
import { Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import ListedBooks from './pages/ListedBooks'
import PagesToRead from './pages/PagesToRead'
 
 const App = () => {
  return (

     <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route path='listedBooks' element={ <ListedBooks/> }/>
        <Route path='pagesToRead' element={ <PagesToRead/>}/>
      </Route>
     </Routes>
      
     
  );
 };
 
 export default App;