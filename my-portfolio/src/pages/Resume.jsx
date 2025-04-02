import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./ResumePage.css";
import "../index.css";

function Resume() {
    return(
        <div className="resumePage">
            

            <div className="contactInfo">
            <h2>Certifications</h2>
                <ul>
                    <li>Phone: +1 (709)-573-5561</li>
                    <li>Email: dawsonbursey04@outlook.com</li>
                    <li>LinkedIn: linkedin.com/in/dawson-bursey</li>
                    <li>GitHub: github.com/dawsonbursey</li>
                </ul>
            </div>

            <div className="certifications">
                <h2>Certifications</h2>
                <ul>
                    <li>Full-Stack Web Development Certificate - University of Toronto</li>
                    <li>Google Data Analytics Certificate - Google</li>
                    <li>Google IT Support Certificate - Google</li>
                    <li>Google Project Management Certificate - Google</li>
                </ul>
            </div>

            {/* <div className="education"></div>

            <div className="experience"></div>

            <div className="skills"></div>

             */}

        
           
        
    

        </div>
);
}
 export default Resume