import { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollTo = (sectionID) => {
        const element = document.getElementById(sectionID);
        element?.scrollIntoView({behavior: "smooth"});
        setIsOpen(false); 
    };

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md w-full">
            <div className="flex justify-between items-center px-8 py-4">
                <div 
                    className="text-xl font-bold text-gray-800 cursor-pointer" 
                    onClick={() => scrollTo('home')}
                >
                    Madison Seal
                </div>
                
                
                <button 
                    className="lg:hidden flex flex-col gap-1"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="block w-6 h-0.5 bg-gray-800"></span>
                    <span className="block w-6 h-0.5 bg-gray-800"></span>
                    <span className="block w-6 h-0.5 bg-gray-800"></span>
                </button>

                
                <ul className="hidden lg:flex gap-8">
                    <li className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer transition-colors" onClick={() => scrollTo('home')}>Home</li>
                    <li className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer transition-colors" onClick={() => scrollTo('projects')}>Projects</li>
                    <li className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer transition-colors" onClick={() => scrollTo('contact')}>Contact Me</li>
                </ul>
            </div>

            
            {isOpen && (
                <ul className="lg:hidden flex flex-col gap-4 px-8 py-4 bg-white border-t border-gray-200">
                    <li className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer transition-colors" onClick={() => scrollTo('home')}>Home</li>
                    <li className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer transition-colors" onClick={() => scrollTo('projects')}>Projects</li>
                    <li className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer transition-colors" onClick={() => scrollTo('contact')}>Contact Me</li>
                </ul>
            )}
        </nav>
    );
}

export default NavBar;