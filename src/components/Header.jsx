import Home from "./header/Home.jsx";
import SocialsBar from "./header/SocialsBar.jsx";
import HomeButtonsBar from "./header/HomeButtonsBar.jsx";


export default function Header({showHeader, changeToProjects, changeToExperience}) {
    const HEADER_STYLE = "fixed top-0 justify-center min-w-full py-4 bg-white shadow-md";

    return (
        <div className={`${showHeader ? HEADER_STYLE : ""}`}>
            <Home/>
            <SocialsBar/>
            <HomeButtonsBar openExperience={() => changeToExperience()} openProjects={() => changeToProjects()}/>
        </div>
    )
}