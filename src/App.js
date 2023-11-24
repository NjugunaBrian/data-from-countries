import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Country from './components/Country';
import CountryDetail from './components/CountryDetail';


export const App = () => {
  return (
    <Routes>
      
        <Route path='/' element={<Country />}></Route>
        <Route path='/:name' element={<CountryDetail />}></Route>
      
    </Routes>

  );
}
