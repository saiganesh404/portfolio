import "./project.css"
import RoboReach from "./../assets/projects/robo_reach_cropped.png"
import Mira from "./../assets/projects/mira_cropped.png"

export default function Project({image, title, description, gh_link}){
    return(
        <div className="project">
            <img src={image}></img>
            <div>
                <a href={gh_link} target="_blank"><h3>{title}</h3></a>
                <p>{description}</p>
            </div>
        </div>
    )
}