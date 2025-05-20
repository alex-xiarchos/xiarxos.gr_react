import {PROJECTS} from "../data/projectsData.js";
import {CARD_BUTTONS_STYLE, PROJECT_CARDS_STYLE, TAG_STYLE} from "../TailwindStyles.js";
import Button from "./utilities/Button.jsx";
import {useState} from "react";

export default function Projects() {
    const [showMoreStates, setShowMoreStates] = useState({});

    const toggleShowMore = (index) => {
        setShowMoreStates((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className={PROJECT_CARDS_STYLE}>
            {PROJECTS.map((project, index) => (
                <div key={index} className="relative p-4 shadow-md bg-white pb-15">
                    <ul className="mb-1 text-sm text-gray-500">
                        {project.keywords.map((keyword, i) => (
                            <li key={i} className={TAG_STYLE}>
                                {keyword}
                            </li>
                        ))}
                    </ul>
                    <h2 className="text-2xl font-bold text-gray-800 my-3">{project.title}</h2>
                    {!showMoreStates[index] && (
                        <p className="text-gray-600 pb-3 whitespace-pre-line">
                            {project.summary + " "}
                            <span
                                className="font-semibold cursor-pointer"
                                onClick={() => toggleShowMore(index)}
                            >Read more</span>
                        </p>
                    )}
                    {showMoreStates[index] && (
                        <p className="text-gray-600 pb-3 whitespace-pre-line">
                            {project.description + " "}
                            <span
                                className="font-semibold cursor-pointer"
                                onClick={() => toggleShowMore(index)}
                            >Read less</span>
                        </p>
                    )}
                    <div className={CARD_BUTTONS_STYLE}>
                        {project.report && (<a href={project.report} target="_blank"><Button>Report</Button></a>)}
                        {project.source && (<a href={project.source} target="_blank"><Button>Source</Button></a>)}
                    </div>
                </div>
            ))}
        </div>
    );
}