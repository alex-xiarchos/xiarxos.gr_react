import Name from "./Header/Name.jsx";
import SocialsBar from "./Header/SocialsBar.jsx";
import HomeButtonsBar from "./Header/HomeButtonsBar.jsx";
import {HEADER_STYLE, CENTERING_STYLE} from "../TailwindStyles.js";
import HomeMobile from "./HomeMobile.jsx";


export default function Header({showAsHeader, showProjects, showExperience}) {

    return (
        <>
            <div className={`${showAsHeader? HEADER_STYLE : CENTERING_STYLE}`}>
                <Name/>
                <SocialsBar/>
                <HomeButtonsBar showExperience={showExperience} showProjects={showProjects}/>
            </div>
        </>
    )
}