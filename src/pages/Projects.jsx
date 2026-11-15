import "./projects.css"
import Project from "./../component/Project"
import PorjectData from "./../assets/projects_data/projects_data.json"
import RoboReach from "./../assets/projects/robo_reach.png"
import Mira from "../assets/projects/mira_cropped.png"
export default function Projects(){
    
    return(
        <div className="projects">
            <h1>Projects</h1>
            <div className="project-cards">
                <Project 
                    image={RoboReach} 
                    title="Pick and Place Robot" 
                    description="Robot built for Robo Reach IITB Techfest Hyderabad" 
                    gh_link="https://github.com/your-username/roboreach" 
                />
                <Project 
                    image={Mira} 
                    title="Mira" 
                    description="Contributing to Autonomous Underwater Vehicle" 
                    gh_link="https://github.com/saiganesh404/mira" 
                />
            </div>
        </div>
    )
}