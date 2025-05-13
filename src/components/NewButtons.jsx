export default function NewButtons() {
    return (
        <div className="fixed top-10 left-10 flex flex-col gap-4">
            <a href="#projects"
               className="px-4 py-2 rounded-full bg-white shadow-md text-gray-800 font-medium hover:bg-gray-100 transition">
                🛠 Projects
            </a>
            <a href="#experience"
               className="px-4 py-2 rounded-full bg-white shadow-md text-gray-800 font-medium hover:bg-gray-100 transition">
                💼 Experience
            </a>
        </div>
    )
}