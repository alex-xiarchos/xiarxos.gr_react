export default function Home() {
    let HOME_STYLE = "md:flex items-center justify-center";
    let NAME_STYLE = "text-8xl font-thin text-gray-700 whitespace-nowrap";
    let SURNAME_STYLE = "font-semibold text-gray-900 ml-1 whitespace-nowrap";

    return (
    <div className={`${HOME_STYLE}`}>
        <h1 className={NAME_STYLE}>Alexandros <span className={SURNAME_STYLE}>Xiarchos</span></h1>
    </div>
    )
}