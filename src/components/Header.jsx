import Home from "./header/Home.jsx";
import SocialsBar from "./header/SocialsBar.jsx";
import HomeButtonsBar from "./header/HomeButtonsBar.jsx";

export default function Header({showHeader, changeToProjects, changeToExperience}) {

    return (
        <div className={showHeader ? 'header' : ''}>
            <Home/>
            <SocialsBar/>
            <HomeButtonsBar openExperience={() => changeToExperience()} openProjects={() => changeToProjects()}/>
        </div>
    )
}