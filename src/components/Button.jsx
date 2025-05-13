import {HOME_BUTTON_STYLE} from "../TailwindStyles.js";

export default function Button({children, handleClick}) {
    return (
        <button onClick={handleClick} className={`${HOME_BUTTON_STYLE}`}>{children}</button>
    )
}