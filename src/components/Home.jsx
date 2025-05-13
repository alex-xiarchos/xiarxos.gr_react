import Header from "./Header.jsx";
import HomeMobile from "./HomeMobile.jsx";

export default function Home({showProjects, showExperience}) {
    return (
        <>
            <Header showAsHeader={false}
                    showProjects={showProjects}
                    showExperience={showExperience}/>

            <HomeMobile/>
        </>
    )
}