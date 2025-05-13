import HomeMobile from "./components/HomeMobile.jsx";
import {useState} from "react";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Home from "./components/Home.jsx";

export default function App() {

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


    const renderContent = () => {
        return <Home />;
    }

  return (
    <div className={``}>
        {renderContent()}
    </div>
  )
}
