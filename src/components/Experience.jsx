import {useState} from "react";
import {CARDS_STYLE} from "../TailwindStyles.js";
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
        <div className={CARDS_STYLE}>
            {EXPERIENCE.map((experience, index) => (
                <div key={index} className="relative p-4 shadow-md bg-white pb-5">
                    <h3 className="text-lg font-semibold text-gray-700">{experience.company}</h3>
                    <h2 className="text-2xl font-bold text-gray-800">{experience.title}</h2>
                    <p className="text-gray-500 mb-2">{experience.date}</p>
                    {!showMoreStates[index] && (
                        <p className="text-gray-600 pb-3 whitespace-pre-line">
                            {experience.description.slice(0, 250)}
                            {experience.description.length > 250 && (
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