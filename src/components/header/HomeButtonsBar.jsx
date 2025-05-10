import {HOME_BUTTON_STYLE, HOME_BUTTON_BAR_STYLE} from "../../TailwindStyles.js"

function HomeButton({children, handleClick}) {

    return (
        <button onClick={handleClick} className={`${HOME_BUTTON_STYLE}`}>{children}</button>
    )
}


export default function HomeButtonsBar({openProjects, openExperience, isHeader}) {
    // Define styles

    return (
        <div className={`${HOME_BUTTON_BAR_STYLE} ${isHeader}`}>
            <HomeButton handleClick={openProjects}>PROJECTS</HomeButton>
            <HomeButton handleClick={openExperience}>EXPERIENCE</HomeButton>
        </div>
    );
}