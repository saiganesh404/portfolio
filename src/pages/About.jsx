import "./about.css"


function Card(title, description){
    return(
        <div className="card">

        </div>
    )
}
export default function About(){
    return(
        <div className="about">
            <div>
                <h1>About</h1>
                <br></br>
                <h3>I am Maram Sai Ganesh Reddy. Currently, A member of Programming Department at Dreadnought Robotics, Actively contributing to Project Mira.</h3>
            </div>
            <div className="exp_quali">
                <div className="cards">
                    <h2>Dreadnought Robotics(2026 - 2027)</h2>
                    <h4>Actively Contributing to Project MIRA at Dreadnought Robotics</h4>
                </div>
                <div className="cards">
                    <h2>VIT Chennai(2024 - 2028)</h2>
                </div>
                <div className="cards">
                    <h2>Chalapathi Public School</h2>
                </div>
            </div>
        </div>
    )
}