import {useState} from "react";


import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Home from "./components/Home.jsx";

export default function App() {
    const [showProjects, setShowProjects] = useState(false);
    const [showExperience, setShowExperience] = useState(false);

    function changeToProjects() {
        setShowProjects((prev) => !prev);
        setShowExperience(false);
    }

    function changeToExperience() {
        setShowExperience((prev) => !prev);
        setShowProjects(false);
    }

    const renderContent = () => {
        if (showExperience) {
            return (
                <>
                    <Home showAsHeader={true} showProjects={changeToProjects} showExperience={changeToExperience} />
                    <Experience />
                </>
            );
        }
        if (showProjects) {
            return (
                <>
                    <Home showAsHeader={true} showProjects={changeToProjects} showExperience={changeToExperience} />
                    <Projects />
                </>
            );
        }
        return <Home showAsHeader={false} showProjects={changeToProjects} showExperience={changeToExperience} />;
    };

    return (
        <>
            {renderContent()}
        </>
    );
}