import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetUsers from './pages/Getuser';
import Adduser from './pages/Adduser';
import Updateuser from './pages/Updateuser';
import './index.css';
const App = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path ="/" element={<GetUsers/>} />
            <Route path = "/add" element={<Adduser/>}/>
            <Route path = "/edit/:id" element ={<Updateuser />} />
        </Routes>
        </BrowserRouter>
    )

}
export default App;