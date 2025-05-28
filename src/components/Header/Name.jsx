import { HOME_STYLE, NAME_STYLE, SURNAME_STYLE } from '../../TailwindStyles.js';

export default function Name() {


    return (
    <div className={`${HOME_STYLE}`}>
        <h1 className={NAME_STYLE}>Alexandros <span className={SURNAME_STYLE}>Xiarchos</span></h1>
    </div>
    )
}