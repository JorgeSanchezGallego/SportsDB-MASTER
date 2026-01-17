import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import League from './pages/League'
import Team from './pages/Team'
import Footer from './components/Footer'

function App() {
  

  return (
    <BrowserRouter> {/*Componente que envuelve toda la app*/}
      <Routes> {/*Define que componentes se tienen que mostrar segun la ruta*/}
        <Route path="/" element={<Home />}/>
        <Route path="/league/:id" element={<League />}/>
        <Route path="/team/:id" element={<Team />} />
      </Routes>
      <Footer/> {/*Independientemente de la ruta, siempre se muestra el footer*/}
    </BrowserRouter>
  )
}

export default App
