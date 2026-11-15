import './App.css'
import NavBar from './component/NavBar'
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import { HashRouter, Routes, Route, Link } from 'react-router';

export default function App() {
  return (
    <div className="main">
      <HashRouter>
        <NavBar />
        <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
        </div>
      </HashRouter>
    </div>
  )
}