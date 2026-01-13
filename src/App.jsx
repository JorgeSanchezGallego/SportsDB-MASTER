import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import League from './pages/League'
import Team from './pages/Team'
import { MembershipProvider } from './context/MembershipContext'

function App() {
  

  return (
    <MembershipProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/league/:id" element={<League />}/>
        <Route path="/team/:id" element={<Team />} />
      </Routes>
    </BrowserRouter>
    </MembershipProvider>
  )
}

export default App
