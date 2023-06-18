import React from 'react'
import Login from './components/Rutas/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from './components/Content';
import EyScontent from './components/EyScontent';
import Procontent from './components/Procontent';
import Usucontent from './components/Usucontent';
import Graficas from './components/Graficas';

const App = () => {
function App() {
  return (
    <>
      <Login/>
     <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Content/>} /> 
        <Route path='/EyS' element={<EyScontent />} />
        <Route path='/Productos' element={<Procontent/>} />
        <Route path='/Usuarios' element={<Usucontent/>} />
        <Route path='/Graficas' element={<Graficas/>} />


      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App
export default App;
