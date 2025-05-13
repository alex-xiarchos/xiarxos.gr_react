import {HOME_BUTTON_STYLE, HOME_BUTTON_BAR_STYLE} from "../../TailwindStyles.js"
import Button from "../Button.jsx";

export default function HomeButtonsBar({showProjects, showExperience, isHeader}) {
    // Define styles

    return (
        <div className={`${HOME_BUTTON_BAR_STYLE} ${isHeader}`}>
            <Button handleClick={showProjects}>PROJECTS</Button>
            <Button handleClick={showExperience}>EXPERIENCE</Button>
        </div>
    );
}