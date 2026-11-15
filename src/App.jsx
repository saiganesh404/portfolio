import './App.css'
import NavBar from './component/NavBar'
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import { BrowserRouter, Routes, Route, Link } from 'react-router';

export default function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <NavBar />
        <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}