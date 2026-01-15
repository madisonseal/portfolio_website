import React, { useRef, useEffect, useState } from "react";

const StickyNote = ({ title, info, color, defaultPosition }) => {
  const noteRef = useRef(null);
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 1024); 
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const element = noteRef.current;
    if (!element) return; 

    if(isMobile) {
      element.style.top = '';
      element.style.left = '';
      return;

    }


    if (defaultPosition) {
      element.style.top = defaultPosition.top;
      element.style.left = defaultPosition.left;
    }

    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    const dragMouseDown = (e) => {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    };

    const elementDrag = (e) => {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
    
      element.style.top = element.offsetTop - pos2 + "px";
      element.style.left = element.offsetLeft - pos1 + "px";

      console.log(`Position: top: "${element.style.top}", left: "${element.style.left}"`);

      

    };

    const closeDragElement = () => {
      console.log(`Final Position: top: "${noteRef.current.style.top}", left: "${noteRef.current.style.left}"`);
      document.onmouseup = null;
      document.onmousemove = null;
    };

    element.onmousedown = dragMouseDown;

    return () => {
      element.onmousedown = null;
    };
  }, [isMobile]);

  return (
    <div
      ref={noteRef}
      className={`${
        isMobile ? "relative" : "absolute cursor-grab active:cursor-grabbing"
      } w-full lg:w-64 h-56 lg:h-64 flex flex-col items-center gap-2 lg:gap-4 p-3 lg:p-4 rounded-lg shadow-xl transition hover:-translate-y-1 hover:shadow-2xl`}
      style={{ background: color }}
    >
      <h3 className="text-lg lg:text-xl font-bold text-center">{title}</h3>
      <p className="whitespace-pre-line text-sm lg:text-md text-center">{info}</p>

      <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-gray-400/20"></div>
    </div>
  );
};

export default StickyNote;