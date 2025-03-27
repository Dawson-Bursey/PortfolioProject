import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import LandingPage from './pages/LandingPage.jsx';
import './index.css';


function App() {
    return(
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
                <Footer />
            </div>
        </Router>
       
);
}

export default App
