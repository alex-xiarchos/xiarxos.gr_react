export default function Projects({showProjects}) {
    return (
        <div className={showProjects ? "" : "hidden"}>
            <h1 className="text-8xl font-thin text-gray-700 whitespace-nowrap">Projects</h1>
            <p className="text-xl text-gray-600 mt-4">Coming soon...</p>
        </div>
    )
}