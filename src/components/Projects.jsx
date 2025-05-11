import {PROJECTS} from "../data/projectsData.js";
import {PROJECT_CARDS_STYLE, TAG_STYLE} from "../TailwindStyles.js";
import Header from "./Header.jsx";

export default function Projects() {
    return (
        <div>
            <div className="w-full">
                <Header showAsHeader={true}/>
            </div>
            <div className={PROJECT_CARDS_STYLE}>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="p-4 shadow-md bg-white">
                        <ul className="mb-1 text-sm text-gray-500">
                            {project.keywords.map((keyword, i) => (
                                <li key={i} className={TAG_STYLE}>
                                    {keyword}
                                </li>
                            ))}
                        </ul>
                        <h2 className="text-2xl font-bold text-gray-800 my-3">{project.title}</h2>
                        <p className="text-gray-600 pb-3 whitespace-pre-line">{project.summary}</p>
                        BUTTON LINKS
                    </div>
                ))}
            </div>
        </div>
    );
}