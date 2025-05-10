function HomeButton({children, handleClick}) {
    const HOME_BUTTON_STYLE = "px-10 flex py-05 border-b-2 border-gray-200 hover:border-gray-400 focus:border-gray-600 mx-4 wide-text cursor-pointer";

    return (
        <button onClick={handleClick} className={`${HOME_BUTTON_STYLE}`}>{children}</button>
    )
}


export default function HomeButtonsBar({openProjects, openExperience, isHeader}) {
    // Define styles
    const HOME_BUTTON_BAR_STYLE = "md:flex items-center justify-center mt-6 text-gray-700 text-xl mr-5 fade-in-delayed";

    return (
        <div className={`${HOME_BUTTON_BAR_STYLE} ${isHeader}`}>
            <HomeButton handleClick={openProjects}>PROJECTS</HomeButton>
            <HomeButton handleClick={openExperience}>EXPERIENCE</HomeButton>
        </div>
    );
}