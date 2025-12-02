export default function AdminModalCalendar({open, onClose, children}) {
    return(
        <div onPointerDown={onClose}
        className={`fixed inset-0 flex justify-center items-center transition-color 
        ${open ? "visible bg-black/80": "invisible"}`}>
            <form action="">
                <div 
                onPointerDown={(e) => e.stopPropagation()}
                className={`bg-neutral-950 rounded-xl shadow p-6 py-19 md:p-8 md:py-20 transition-all duration-300 ease-in-out
                ${open ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}>
                    {children}
                </div>
            </form>
        </div>
    )
}