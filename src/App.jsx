
import './App.css';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import NavBar from './components/NavBar';
import ContactForm from './components/ContactForm';





function App() {
  return (
    
     <div>
      <NavBar />
      <div id='home' className="scroll-mt-16">
        <Home />
      </div>
      <div id='projects' className="scroll-mt-16">
        <ProjectPage />
      </div>
      <div id='contact' className="scroll-mt-16 m-32">
        <ContactForm />
        
      </div>
    </div>
    
  )
}

export default App

