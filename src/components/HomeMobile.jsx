export default function HomeMobile() {
    let homeMobileStyle = "md:hidden flex flex-col justify-center h-screen mx-20";
    let nameStyle = "text-right text-7xl font-thin text-gray-700 mb-6";
    let surnameStyle = "font-semibold text-gray-900";
    let socialsStyle = "block items-center justify-center text-gray-800 text-xl tracking-normal space-y-1";

    return (
        <>
            <div className={homeMobileStyle}>
                <h1 className={nameStyle}>Alexandros <br/> <span className={surnameStyle}>Xiarchos</span></h1>
                <div className={socialsStyle}>
                    <div className="flex justify-end">
                        <img src="https://www.svgrepo.com/show/502648/email.svg" alt="site icon" className="w-5 h-5 mr-3"/>
                        <a href="mailto:alex@xiarxos.gr" target="_blank">alex@xiarxos.gr</a>
                    </div>
                    <div className="flex justify-end">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="site icon" className="w-5 h-5 mr-3"/>
                        <a href="https://github.com/alex-xiarchos" target="_blank">alex-xiarchos</a>
                    </div>
                    <div className="flex justify-end">
                        <img src="https://www.svgrepo.com/show/341996/linkedin-in.svg" alt="site icon" className="w-5 h-5 mr-3"/>
                        <a href="https://www.linkedin.com/in/alex-xiarchos/" target="_blank">alex-xiarchos</a>
                    </div>
                </div>
            </div>
        </>
    )
}