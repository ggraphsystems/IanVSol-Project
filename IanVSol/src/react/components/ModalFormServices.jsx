import {Check, X}  from 'feather-icons-react'

export default function ModalFormServices({open, onClose, children}) {
    return(
        <div onClick={onClose} 
        className={`fixed inset-0 flex justify-center items-center transition-color 
        ${open ? "visible bg-black/20": "invisible"}`}>
            <div 
            onClick={(e) => e.stopPropagation()}
            className={`bg-neutral-950 rounded-xl shadow p-2 max-h-[80vh] py-5 overflow-y-auto lg:p-10 lg:py-2 transition-all duration-300 ease-in-out
            ${open ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}>
                <button 
                onClick={onClose}
                className="absolute top-2 right-2 p-1 rounded-lg text-white hover:text-white cursor-pointer">
                    <X/>
                </button>
                <button 
                onClick={onClose}
                className="absolute top-210 right-2 p-1 rounded-lg text-white hover:text-white cursor-pointer">
                    <Check/>
                </button>
                {children}
            </div>
        </div>
    )
}