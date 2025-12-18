import StickyNote from "./StickyNote";
import PopUp from "./PopUp"
import { useState, useEffect } from 'react';


const StickyList = () => {
const [showPopup, setPopup] = useState(false);

useEffect(() => {
  const isDesktop = window.innerWidth >= 1024;
  const seenPopup = sessionStorage.getItem('PopupShown');

  console.log('Window width:', window.innerWidth);
  console.log('Is Desktop?', isDesktop);
  console.log('Seen Popup?', seenPopup);

  if (isDesktop && !seenPopup) {
    console.log('About to show popup!');
    setPopup(true);
    sessionStorage.setItem('PopupShown', 'true');
  } else {
    console.log('Not showing popup because:', {
      isDesktop,
      seenPopup
    });
  }
}, []);

  const notes = [
    {
      title: "Currently 🌟",
      info: `Junior Developer at Scout — building a full-stack web app for Baseline Tech.\nUsing: React, Node.js, Supabase, Postgres`,
      color: "linear-gradient(to bottom right, #f87171, #ec4899)",
      defaultPosition : {left: "429px", top: "-429px" }
    },
    {
      title: "Coming Soon 🔜",
      info: `Incoming SWE Intern @ Nordstrom Summer 2026\nExcited to work on large-scale retail tech.`,
      color: "linear-gradient(to bottom right, #fef08a, #fbbf24)",
      defaultPosition : {left: "1027px", top: "-429px"}
    },
    {
      title: "Tech Stack 💻",
      info: `Python · Java · JavaScript\nReact · Node.js · Postgres\nSupabase · HTML/CSS/Tailwind`,
      color: "linear-gradient(to bottom right, #fb923c, #f97316)",
      defaultPosition : {left: "728px", top:"-429px"}
    },
    {
      title: "Connect with Me! 🤝",
      info: `Always happy to connect about UI, creative dev, or co-op opportunities.`,
      color: "linear-gradient(to bottom right, #bef264, #84cc16)",
      defaultPosition : {left: "541px", top:"-148px"}
    },
    {
      title: "Fun Facts 🩷",
      info: `Currently obsessed with frontend animations.\nRuns on iced coffee.\nCodes faster with lo-fi playing.`,
      color: "linear-gradient(to bottom right, #7dd3fc, #0ea5e9)",
      defaultPosition : {left: "878px", top:"-150px"}
    },
  ]

  ;

  return (
    <>
    {showPopup && <PopUp onClose={()=> setPopup(false)}/>}
    <div className="relative min-h-screen p-4 sm:p-8">
     
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-6xl mx-auto">
        {notes.map((note, idx) => (
          <StickyNote key={idx} {...note} />
        ))}
      </div>


      <div className="hidden lg:block relative min-h-screen">
        {notes.map((note, idx) => (
          <StickyNote key={idx} {...note} />
        ))}
      </div>
    </div>

    </>
  );
};

export default StickyList;