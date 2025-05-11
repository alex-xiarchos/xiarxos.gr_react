import {HOME_BUTTON_STYLE, HOME_BUTTON_BAR_STYLE} from "../../TailwindStyles.js"

function HomeButton({children, handleClick}) {

    return (
        <button onClick={handleClick} className={`${HOME_BUTTON_STYLE}`}>{children}</button>
    )
}


export default function HomeButtonsBar({showProjects, showExperience, isHeader}) {
    // Define styles

    return (
        <div className={`${HOME_BUTTON_BAR_STYLE} ${isHeader}`}>
            <HomeButton handleClick={showProjects}>PROJECTS</HomeButton>
            <HomeButton handleClick={showExperience}>EXPERIENCE</HomeButton>
        </div>
    );
}