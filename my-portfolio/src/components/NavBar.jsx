import { Link } from "react-router-dom";
function NavBar(){
    return(
        <div className="navbar">
           
            <h2>Dawson Bursey</h2>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"Projects"}>Projects</Link></li>
                <li><Link to={"Resume"}>Resume</Link></li>
            </ul>
        
        </div>
    )
}

export default NavBar