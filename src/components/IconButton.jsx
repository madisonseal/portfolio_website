const IconButton = ({ icon: Icon, label, href, download }) => {
    return (
      <a
        href={href}
        className="flex flex-col items-center bg-white w-1/3 h-24 rounded-lg justify-center hover:bg-gray-100 transition-all duration-200 hover:shadow-md"
        target={download ? "_self" : "_blank"} 
        download={download} 
        rel={download ? undefined : "noopener noreferrer"} 
      >
        <Icon color="black" size={40} />
        <p className="text-sm">{label}</p>
      </a>
    );
  };
  
  export default IconButton;
  