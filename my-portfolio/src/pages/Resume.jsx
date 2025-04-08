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
                    <li>
                        Keyin College - Graduated Dec/20/24
                        <ul>
                            <li>Diploma in Software Development</li>
                            <li>Specialization in Front-End Development</li>
                            <li>Capstone Project: Portfolio Website</li>
                        </ul>
                    </li>
                    <br />
                    <li>Carbonear Collegiate
                        <ul>
                            <li>Graduated June/2022</li>
                            <li>89% Average</li>
                            <li>Academic Diploma</li>

                        </ul>
                    </li>
                </ul>
            </div>

            <div className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Git and GitHub</li>
                </ul>
            </div>
        

        </div>
);
}
 export default Resume