export default function AdminModalCalendar({open, onClose, children}) {
    return(
        <div onPointerDown={onClose}
        className={`fixed inset-0 flex justify-center items-center transition-color 
        ${open ? "visible bg-black/80": "invisible"}`}>
            <form action="">
                <div 
                onPointerDown={(e) => e.stopPropagation()}
                className={`bg-neutral-950 rounded-xl shadow p-2 py-19 md:p-8 md:py-20 transition-all duration-300 ease-in-out
                ${open ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}>
                    {/* <button 
                    type='button'
                    onClick={onClose}
                    className="absolute top-2 right-2 p-1 rounded-lg text-white hover:text-white cursor-pointer">
                        <X/>
                    </button> */}
                    {children}
                    {/* <button
                    onClick={onClose}
                    className={`absolute w-20 right-2 p-2 mt-8 text-black bg-white hover:scale-105 hover:bg-purple-500 hover:text-white rounded-xl transition-all duration-200 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-600 inline-block [--tw-text-opacity:1]
                        active:bg-purple-600 active:text-white focus:text-white focus:bg-purple-600`}>
                        Save
                    </button> */}
                </div>
            </form>
        </div>
    )
}