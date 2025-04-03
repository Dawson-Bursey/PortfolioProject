import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./ResumePage.css";
import "../index.css";

function Resume() {
    return(
        <div className="resumePage">
            

            <div className="contactInfo">
            <h2>Contact Information</h2>
                <ul>
                    <li>Phone: +1 (709)-573-5561</li>
                    <br />
                    <li>Email: dawsonbursey04@outlook.com</li>
                    <br />
                    <li>LinkedIn: linkedin.com/in/dawson-bursey</li>
                    <br />
                    <li>GitHub: github.com/dawsonbursey</li>
                </ul>
            </div>

            <div className="certifications">
                <h2>Certifications</h2>
                <ul>
                    <li>Front-End Software Developer</li>
                    <li>Back-End Software Developer</li>
                    <li>Software Foundations</li>
                    <li>Dev-Ops and Software Design</li>
                </ul>
            </div>

            <div className="education">
                <h2>Education</h2>
                <ul>
                    <li>Keyin Collage</li>
                    <li></li>
                    <li>Graduated: 2023</li>
                </ul>
            </div>

            {/* 

            <div className="experience"></div>

            <div className="skills"></div>

             */}

        
           
        
    

        </div>
);
}
 export default Resume