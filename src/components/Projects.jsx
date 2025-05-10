import {PROJECTS} from "../data/projectsData.js";

export default function Projects({ showProjects }) {
    return (
        <div className={`${showProjects ? "" : "hidden"} mt-85`} >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="p-4 shadow-md bg-white">
                        <ul className="mb-1 text-sm text-gray-500">
                            {project.keywords.map((keyword, i) => (
                                <li key={i} className="inline-block mb-2 mr-2 bg-gray-100 px-2 py-0.5 rounded">
                                    {keyword}
                                </li>
                            ))}
                        </ul>
                        <h2 className="text-2xl font-bold text-gray-800 my-3">{project.title}</h2>
                        <p className="text-gray-600 mt-2">{project.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}