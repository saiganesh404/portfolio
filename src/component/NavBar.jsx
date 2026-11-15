import "./navbar.css"
import { Link } from "react-router"
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa"

export default function NavBar(){

    return(
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/"><h3>Sai Ganesh</h3></Link>
            </div>
            <div className="navbar-middle">
                <div className="sections">
                    <Link to="/about">About</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/blogs">Blogs</Link>
                </div>
            </div>
            <div className="navbar-right">
                <a href="https://github.com/saiganesh404" target="_blank"><FaGithub size={25}/></a>
                <a href="https://linkedin.com/in/saiganesh404" target="_blank"><FaLinkedin size={25}/></a>
                <a href="mailto:maramsaiganeshr@gmail.com" target="_blank"><FaMailBulk size={25}/></a>
            </div>
        </nav>
    )
}