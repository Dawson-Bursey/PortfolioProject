
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
                <br />
                <h2>Summary</h2>
                <p>Detail-oriented and highly motivated software developer with a strong foundation in full-stack development. Proven ability to work collaboratively in team environments and deliver high-quality software solutions. Seeking to leverage my skills and knowledge to contribute to innovative projects.</p>
                <br />
                <img src="" alt="me" />
            </div>

            <div className="education">
                <h2>Education</h2>
                <ul>
                    <li>
                        Keyin College
                        <ul>
                            <li>Graduated Dec/20/24</li>
                            <li>Diploma in Software Development</li>
                            <li>Full-Stack Development</li>
                        </ul>
                    </li>
                    <br />
                    <li>Carbonear Collegiate
                        <ul>
                            <li>Graduated June/2022</li>
                            <li>80% Average</li>
                            <li>Academic Diploma</li>

                        </ul>
                    </li>
                </ul>

                <div className="certifications">
                <h2>Certifications</h2>
                <ul>
                    <li>Front-End Software Developer</li>
                    <li>Back-End Software Developer</li>
                    <li>Software Foundations</li>
                    <li>Dev-Ops and Software Design</li>
                </ul>
            </div>
            </div>

           

            

            <div className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>Git and GitHub</li>
                </ul>

                <div className="Experince">
                <h2>Experience</h2>
                <ul>
                    <li>LadderSpike.inc</li>
                        <ul>
                            <li>Worked with other students as a team to help design and pland a new website layout.</li>
                            <li>Used Liquid to build and redesign sections of each page on shopify.</li>
                            <li>Helped with adding and re-evaluating features and funtions of the website.</li>
                            <li>Helped with Brainstorming and Naming of future additions of the product.</li>
                        </ul>
                    
                </ul>

                <br />
                <h2>Projects</h2> {/* Might Replace with more eperince */}
                <ul>
                    <li>Personal Portfolio Website</li>
                    <li>Developed a responsive portfolio website using HTML, CSS, and JavaScript to showcase my projects and skills.</li>
                    <li>Implemented a contact form using Node.js and Express.js to handle form submissions.</li>
                    <li>GitHub Repository: github.com/dawsonbursey/portfolio</li>
                </ul>
                </div>

            </div>
        

        </div>
);
}
 export default Resume