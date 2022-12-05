
import { useState } from 'react'
import './App.css'
import Gestion from './components/gestion'
import Login from './components/login'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nuevo from './components/nuevo'
import Editar from './components/editar'
import Registro from './components/registro'
import Estado from './components/estado'


 function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path='/gestion' element={<Gestion />}/>
          <Route path='/nuevo' element={<Nuevo />}/>
          <Route path='/editar' element={<Editar />}/>
          <Route path='/registro' element={<Registro />}/>
          <Route path='/estado' element={<Estado />}/>
        </Routes>
      </BrowserRouter> 
    </div>
  )
} 

export default App;
