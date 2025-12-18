import Project from "../components/Project"
import websiteImage from "../assets/website.png"
import image from "../assets/monkey-thinking.png"
import flowmersion from "../assets/flowmersion.png"
import looper from "../assets/looper.png"


const ProjectList = () => {
    return (
        <div className="flex  flex-col-reverse gap-8 pt-12 bg-blue-100 pb-16">
            <Project title="This personal website!" desc="This website is something I built to show who I am — both as a developer and a person. It’s made with React and Tailwind, and I designed everything myself, from the layout to the little interactive details. I wanted it to feel clean, fun, and very “me.” It’s also the first project where I really leaned into reusable components and organizing a frontend the right way." img={websiteImage} stack={["Vue", "React", "JavaScript", "Tailwind CSS"]} github=""/>
            <Project title="Scout — Junior Developer (Club)" desc="I’m working with Scout, Northeastern’s student-led design studio, on a platform for Baseline Tech, a company building smart wearables for snow sport athletes. My main focus is on the backend — building features like waitlists, automated mailers, and the data flows that support them. I collaborate with designers and other engineers to connect the frontend with a clean, reliable backend and help move the project toward a production-ready release." img={flowmersion} stack={["React","TypeScript", "Express", "Supabase"]} github="https://github.com/Scout-NU/baseline-tech-website"/>
            <Project title="Virtual Guitar Looper (Personal)" desc="This is a small creative coding project inspired by my love of music. It’s a guitar looper you can run right in the browser — you can record short clips, layer them, and mess around with sound. I built it using JavaScript and the Web Audio API, mostly because I was curious about how audio processing works under the hood. It’s not meant to be perfect, just something fun that taught me a lot." img={looper} stack={["JavaScript","HTML", "CSS", "Web Audio API"]} github="https://github.com/madisonseal/looper"/>
            <h1 className="text-3xl text-extrabold">Projects</h1>
        </div>
    )
}

export default ProjectList