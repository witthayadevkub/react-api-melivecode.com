import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import AddUser from './components/AddUser.jsx'
import Edit from './components/Edit.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
          <Routes>
                  <Route path="/" element={<App/>}></Route>
                  
                  <Route path='*' element={<App/>}></Route>
                  <Route path="/add" element={<AddUser/>}></Route>
                  <Route path='/edit/:id' element={<Edit/>}></Route>
          </Routes>
     </BrowserRouter>
)
