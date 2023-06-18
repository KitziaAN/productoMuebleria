
import LoginCom from './components/LoginCom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContBienvenida from './components/ContBienvenida';
import Content from './components/Content';
import ContCategoriasM from './components/ContCategoriasM';
import EyScontent from './components/EyScontent';
import ContEySM from './components/ContEySM';
import ContEySGr from './components/ContEySGr';
import Procontent from './components/Procontent';
import ContProductosM from './components/ContProductosM';
import Uscontent from './components/Usucontent';
import ContUsuariosM from './components/ContUsuariosM';


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path='/Bienvenida' element={<ContBienvenida/>} /> 
        <Route path='/' element={<Content/>} /> 
        <Route path='/MostrarCategorias' element={<ContCategoriasM/>} /> 
        <Route path='/EyS' element={<EyScontent/>} /> 
        <Route path='/Procontent' element={<Procontent/>} /> 
        <Route path='/MostrarProductos' element={<ContProductosM/>} /> 
        <Route path='/MostrarEyS' element={<ContEySM/>} /> 
        <Route path='/GraficasEyS' element={<ContEySGr/>} /> 
        <Route path='/Uscontent' element={<Uscontent/>} /> 
        <Route path='/MostrarUsuarios' element={<ContUsuariosM/>} /> 
        <Route path='/Login' element={<LoginCom/>} /> 


        </Routes>
      </BrowserRouter>
        
    </>
  );
}


export default App;

