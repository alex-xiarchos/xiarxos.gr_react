import Header from "./Header.jsx";

export default function Home({showProjects, showExperience}) {
    return (
        <Header showAsHeader={false}
                showProjects={showProjects}
                showExperience={showExperience}/>
    )
}