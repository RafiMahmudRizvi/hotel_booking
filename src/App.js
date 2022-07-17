//react
import React from 'react';

//react-router-dom
import {
  Routes,
  Route,
} from "react-router-dom";

//components
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotel from './pages/hotel/Hotel'



//----------------------------------------------------------------//
function App() {
  return (
    <div className="app">
     <Routes>
      
      <Route path='/' element={<Home />}></Route>
      <Route path='/hotels' element={<List />}></Route>
      <Route path='/hotels/:id' element={<Hotel />}></Route>
     </Routes>
    </div>
  );
}

export default App;
//----------------------------------------------------------------//
