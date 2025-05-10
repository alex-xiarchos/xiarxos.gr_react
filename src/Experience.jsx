export default function Experience({showExperience}) {
    return (
        <div className={showExperience ? "" : "hidden"}>
            <h1 className="text-8xl font-thin text-gray-700 whitespace-nowrap">Experience</h1>
            <p className="text-xl text-gray-600 mt-4">Coming soon...</p>
        </div>
    )
}