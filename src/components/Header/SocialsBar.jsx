import {SOCIAL_LINKS} from "../../data/socialsData.js";
import {HOME_STYLE, SOCIALS_BAR_STYLE} from "../../TailwindStyles.js"


function Social({image, username, link}) {
    return (
        <div className="flex items-center">
            <img src={image} alt="site icon" className="w-5 h-5 mr-3"/>
            <a href={link} target="_blank">{username}</a>
        </div>
    );
}

function SocialDivider() {
    return (
        <span className="mx-8 font-black text-gray-600">|</span>
    );
}

export default function SocialsBar() {
    return (
        <div className={`${SOCIALS_BAR_STYLE} ${HOME_STYLE}`}>
            <Social image={SOCIAL_LINKS[0].image} username={SOCIAL_LINKS[0].username} link={SOCIAL_LINKS[0].link}/>
            <SocialDivider />
            <Social image={SOCIAL_LINKS[1].image} username={SOCIAL_LINKS[1].username} link={SOCIAL_LINKS[1].link}/>
            <SocialDivider />
            <Social image={SOCIAL_LINKS[2].image} username={SOCIAL_LINKS[2].username} link={SOCIAL_LINKS[2].link}/>
        </div>
    );
}