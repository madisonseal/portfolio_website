import {ReactTyped} from "react-typed"
import me from "../assets/me.jpg"
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa"
import IconButton from "./IconButton"

const AboutMe = () => {
    return (
        <div 
            style={{ background: "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)" }}
            className="shadow-2xl text-left w-96 h-96 rounded-lg p-4 mx-auto lg:ml-8 lg:mr-8 mb-4"
        >
            <div className="flex items-center gap-4 pb-4">
                <img src={me} alt="Madison Seal" className="h-24 w-24 rounded-full flex-shrink-0 object-cover scale-130 border-4 border-white shadow-md"/>
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">Madison Seal</h1>
                    <ReactTyped className="text-bold" strings={["Self Proclaimed Creative Developer"]} typeSpeed={100}  />
                </div>
            </div>
            <hr className="border-black" />
            <div className="text-base pt-4 ml-4 mr-4">
                Third Year at Northeastern University. Seeking a Fall 2026 FullStack/SWE Co-op.
                <div className="flex flex-row gap-2 mt-8 justify-around m-4 align-middle">
                    <IconButton icon={FaDownload} label="Resume" href="https://drive.google.com/file/d/1-JYQ4L_2Lc2jwf9K7daYlGfXNaAVlp-h/view?usp=sharing"/>
                    <IconButton icon={FaGithub} label="Github" href="https://github.com/madisonseal"/>
                    <IconButton icon={FaLinkedin} label="Linkedin" href="https://www.linkedin.com/in/madison-seal/"/>
                </div>
            </div>
        </div>
    )
}

export default AboutMe