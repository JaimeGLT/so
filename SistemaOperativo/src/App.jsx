import Sesion from "./components/Sesion/Sesion"
import Home from "./components/Home/Home"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SpaceE from "./components/SpaceE/SpaceE"
import TareaDetail from "./components/SpaceE/componentsSpace/Tareas/CardDetail/TareaDetail"
import ActualizarTarea from "./components/SpaceE/componentsSpace/Tareas/ActualizarTarea/ActualizarTarea"
import DetailApunte from "./components/SpaceE/componentsSpace/Apuntes/DetailApunte/DetailApunte"
import ActualizarApunte from "./components/SpaceE/componentsSpace/Apuntes/ActualizarApunte/ActualizarApunte"

function App() {

  const [ changePage, setChangePage ] = useState('tarea');


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Sesion/>}/>
      <Route path="/inicio" element={<Home/>}/>
      <Route path='/inicio/space' element={<SpaceE changePage={changePage} setChangePage={setChangePage}/>}/> 
      <Route path='/inicio/space/tarea/:id' element={<TareaDetail/>}/>
      <Route path='/inicio/space/tarea/update/:id' element={<ActualizarTarea />}/>
      <Route path='/inicio/space/apunte/:id' element={<DetailApunte setChangePage={setChangePage}/>}/> 
      <Route path='/inicio/space/apunte/update/:id' element={<ActualizarApunte/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
