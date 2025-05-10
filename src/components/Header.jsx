import Home from "./header/Home.jsx";
import SocialsBar from "./header/SocialsBar.jsx";
import HomeButtonsBar from "./header/HomeButtonsBar.jsx";
import {HEADER_STYLE} from "../TailwindStyles.js";


export default function Header({showHeader, changeToProjects, changeToExperience}) {
x
    return (
        <div className={`${showHeader ? HEADER_STYLE : ""}`}>
            <Home/>
            <SocialsBar/>
            <HomeButtonsBar openExperience={() => changeToExperience()} openProjects={() => changeToProjects()}/>
        </div>
    )
}