import HomeMobile from "./HomeMobile.jsx";
import Header from "./Header.jsx";
import {useState} from "react";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";

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
    <div className={`${CENTERING_STYLE}`}>
        <Header showHeader={showExperience || showProjects} changeToExperience={() => changeToExperience()} changeToProjects={() => changeToProjects()} />
        <Experience showExperience={showExperience} />
        <Projects showProjects={showProjects} />
        <HomeMobile/>
    </div>
  )
}
