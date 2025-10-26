export default function Modal({open, onClose, children}) {
    return(
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-color ${open ? "visible bg-black/20": "invisible"}`}>
            {children}
        </div>
    )
}