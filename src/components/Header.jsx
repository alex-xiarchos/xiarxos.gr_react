import Name from "./header/Name.jsx";
import SocialsBar from "./header/SocialsBar.jsx";
import HomeButtonsBar from "./header/HomeButtonsBar.jsx";
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