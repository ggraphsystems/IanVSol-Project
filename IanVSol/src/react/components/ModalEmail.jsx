import {X}  from 'feather-icons-react'

export default function Modal({open, onClose, children}) {
    return(
        <div onClick={onClose} 
        className={`fixed inset-0 flex justify-center items-center transition-color 
        ${open ? "visible bg-black/20": "invisible"}`}>
            <div 
            onClick={(e) => e.stopPropagation()}
            className={`bg-purple-600 rounded-xl shadow p-2 py-15 lg:p-15 lg:py-10 transition-all duration-300 ease-in-out
            ${open ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}>
                <button 
                onClick={onClose}
                className="absolute top-2 right-2 p-1 rounded-lg text-black hover:text-white">
                    <X/>
                </button>
                {children}
            </div>
        </div>
    )
}
