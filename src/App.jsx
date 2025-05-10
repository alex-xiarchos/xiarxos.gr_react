import HomeMobile from "./components/HomeMobile.jsx";
import Header from "./components/Header.jsx";
import {useState} from "react";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
    const CENTERING_STYLE = "flex flex-col items-center justify-center h-screen";

    const [showProjects, setShowProjects] = useState(false)
    const [showExperience, setShowExperience] = useState(false)

    function changeToProjects() {
        setShowProjects(!showProjects);
        setShowExperience(false);
    }

    function changeToExperience() {
        setShowExperience(!showExperience);
        setShowProjects(false);
    }


  return (
    <div className={`${CENTERING_STYLE} mb-50`}>
        <Header showHeader={showExperience || showProjects} changeToExperience={() => changeToExperience()} changeToProjects={() => changeToProjects()} />
        <Experience showExperience={showExperience} />
        <Projects showProjects={showProjects} />
        <HomeMobile/>
    </div>
  )
}
