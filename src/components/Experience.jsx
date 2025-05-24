import {useState} from "react";
import {PROJECT_CARDS_STYLE} from "../TailwindStyles.js";
import {EXPERIENCE} from "../data/experienceData.js";

export default function Experience() {
    const [showMoreStates, setShowMoreStates] = useState({});

    const toggleShowMore = (index) => {
        setShowMoreStates((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
            {EXPERIENCE.map((experience, index) => (
                <div key={index} className="relative p-4 shadow-md bg-white pb-5">
                    <h2 className="text-2xl font-bold text-gray-800 my-1">{experience.title}</h2>
                    <h3 className="text-xl font-semibold text-gray-700">{experience.company}</h3>
                    <p className="text-gray-500 mb-2">{experience.date}</p>
                    {!showMoreStates[index] && (
                        <p className="text-gray-600 pb-3 whitespace-pre-line">
                            {experience.description.slice(0, 100)}
                            {experience.description.length > 100 && (
                                <>
                                    ... <span
                                    className="font-semibold cursor-pointer"
                                    onClick={() => toggleShowMore(index)}
                                >Read more</span>
                                </>
                            )}
                        </p>
                    )}
                    {showMoreStates[index] && (
                        <p className="text-gray-600 pb-3 whitespace-pre-line">
                            {experience.description} <span
                            className="font-semibold cursor-pointer"
                            onClick={() => toggleShowMore(index)}
                        >Read less</span>
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}