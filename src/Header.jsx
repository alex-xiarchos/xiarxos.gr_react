import Home from "./HeaderComps/Home.jsx";
import SocialsBar from "./HeaderComps/SocialsBar.jsx";
import HomeButtonsBar from "./HeaderComps/HomeButtonsBar.jsx";

export default function Header({showHeader, changeToProjects, changeToExperience}) {

    return (
        <div className={showHeader ? 'header' : ''}>
            <Home/>
            <SocialsBar/>
            <HomeButtonsBar openExperience={() => changeToExperience()} openProjects={() => changeToProjects()}/>
        </div>
    )
}