import Home from "./header/Home.jsx";
import SocialsBar from "./header/SocialsBar.jsx";
import HomeButtonsBar from "./header/HomeButtonsBar.jsx";
import {HEADER_STYLE} from "../TailwindStyles.js";
import HomeMobile from "./HomeMobile.jsx";


export default function Header({showAsHeader, showProjects, showExperience}) {

    return (
        <>
            <div className={`${showAsHeader? HEADER_STYLE : "hidden"}`}>
                <Home/>
                <SocialsBar/>
                <HomeButtonsBar openExperience={showExperience} openProjects={showProjects}/>
            </div>
            <div className={`${showAsHeader? "hidden" : ""}`}>
                <HomeMobile/>
            </div>
        </>
    )
}