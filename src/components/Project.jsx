const Project = ({title, desc, stack, img, github}) => {
    return (
        <div className="h-136 w-full max-w-4xl mx-auto  rounded shadow-lg bg-grey-300 flex flex-col p-4 bg-white justify-start">
            <div className="w-full h-80 border-black border-4 overflow-hidden">
                <img className="w-full h-full object-cover" src={img} alt={title}></img>
            </div>
            <h1 className="text-left text-xl font-semibold ml-4 mt-4">{title}</h1>
            <p className="text-left ml-4 mr-16">{desc}</p>
            <div className="mt-4 flex gap-2 ml-4 mb-4">
                {stack.map((tech, index) => (
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-blue-800 dark:text-blue-100" key={index}>{tech}</span>
                ))}
            </div>
            {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="ml-4 inline-flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition w-fit"
                ><span>Github</span></a>
            )}
        </div>
    )
}

export default Project