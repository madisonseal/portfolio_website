import AboutMe from '../components/AboutMe.jsx';
import StickyList from '../components/StickyList.jsx';
import NavBar from '../components/NavBar';




function Home () {
    return (
        <div className="overflow-x-hidden">
        <div className="w-full min-h-screen bg-white relative pt-8"
            style={{
                backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}>
            <AboutMe />
            <StickyList />
        </div>
        </div>
    )
}

export default Home