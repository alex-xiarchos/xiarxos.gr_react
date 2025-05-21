import Header from "./Header.jsx";
import HomeMobile from "./HomeMobile.jsx";

export default function Home({showAsHeader, showProjects, showExperience}) {
    return (
        <>
            <Header showAsHeader={showAsHeader}
                    showProjects={showProjects}
                    showExperience={showExperience}/>

            {!showAsHeader && <HomeMobile/>}
        </>
    )
}