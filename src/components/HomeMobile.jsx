import {HOME_MOBILE_STYLE, NAME_MOBILE_STYLE, SURNAME_MOBILE_STYLE, SOCIALS_MOBILE_STYLE} from "../TailwindStyles.js"
import {SOCIAL_LINKS} from "../data/socialsData.js";

export default function HomeMobile() {
    const linkGroupStyle = "flex justify-end";
    const imgStyle = "w-5 h-5 mr-3 mt-0.5";

    return (
        <>
            <div className={HOME_MOBILE_STYLE}>
                <h1 className={NAME_MOBILE_STYLE}>Alexandros <br/> <span className={SURNAME_MOBILE_STYLE}>Xiarchos</span></h1>
                <div className={SOCIALS_MOBILE_STYLE}>
                    <div className={linkGroupStyle}>
                        <img src={SOCIAL_LINKS[2].image} alt="site icon" className={imgStyle}/>
                        <a href={SOCIAL_LINKS[2].link} target="_blank">{SOCIAL_LINKS[2].username}</a>
                    </div>
                    <div className={linkGroupStyle}>
                        <img src={SOCIAL_LINKS[0].image} alt="site icon" className={imgStyle}/>
                        <a href={SOCIAL_LINKS[0].link} target="_blank">{SOCIAL_LINKS[0].username}</a>
                    </div>
                    <div className={linkGroupStyle}>
                        <img src={SOCIAL_LINKS[1].image} alt="site icon" className={imgStyle}/>
                        <a href={SOCIAL_LINKS[1].link} target="_blank">{SOCIAL_LINKS[1].username}</a>
                    </div>
                </div>
            </div>
        </>
    )
}