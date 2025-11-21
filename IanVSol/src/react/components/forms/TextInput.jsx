export default function TextInput({label, type, name, value, onChange}) {
    return(
        <div className="text-white pt-6">
            <label className="text-sm font-bold md:pt-10 lg:pt-6 2xl:pt-8">{label}</label>
            <input 
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="pt-3 w-76 lg:w-103 2xl:w-130 bg-black border-b border-neutral-500 focus:outline-none focus:border-white" 
            />
        </div>
    )
}