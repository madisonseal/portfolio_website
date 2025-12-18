import React from 'react';

const PopUp = ({onClose}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">Hey, it's Madison! 👋</h2>
                <p className="text-gray-700">
                    Just letting you know that the sticky notes on this page are draggable. 
                    Click and drag them around to arrange however you like!
                </p>
                <button 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition hover:-translate-y-1"
                    onClick={onClose}
                >
                    Got it!
                </button>
            </div>
        </div>
    )
}

export default PopUp