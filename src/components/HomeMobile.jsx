import {HOME_MOBILE_STYLE, NAME_MOBILE_STYLE, SURNAME_MOBILE_STYLE, SOCIALS_MOBILE_STYLE} from "../TailwindStyles.js"

export default function HomeMobile() {


    return (
        <>
            <div className={HOME_MOBILE_STYLE}>
                <h1 className={NAME_MOBILE_STYLE}>Alexandros <br/> <span className={SURNAME_MOBILE_STYLE}>Xiarchos</span></h1>
                <div className={SOCIALS_MOBILE_STYLE}>
                    <div className="flex justify-end">
                        <img src="https://www.svgrepo.com/show/502648/email.svg" alt="site icon" className="w-5 h-5 mr-3"/>
                        <a href="mailto:alex@xiarxos.gr" target="_blank">alex@xiarxos.gr</a>
                    </div>
                    <div className="flex justify-end">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="site icon" className="w-5 h-5 mr-3"/>
                        <a href="https://github.com/alex-xiarchos" target="_blank">alex-xiarchos</a>
                    </div>
                    <div className="flex justify-end">
                        <img src="https://www.svgrepo.com/show/341996/linkedin-in.svg" alt="site icon" className="w-5 h-5 mr-3"/>
                        <a href="https://www.linkedin.com/in/alex-xiarchos/" target="_blank">alex-xiarchos</a>
                    </div>
                </div>
            </div>
        </>
    )
}