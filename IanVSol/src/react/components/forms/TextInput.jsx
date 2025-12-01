import {Eye, EyeOff}  from 'feather-icons-react'
export default function TextInput({label, type, name, value, onChange, isInvalid, disable, icons}) {
    return(
        <div className="text-white pt-6">
            <label className={`text-sm font-bold md:pt-10 lg:pt-6 2xl:pt-8 ${isInvalid ? 'hidden' : 'border-neutral-500'} focus:outline-none focus:border-white`}>{label}</label>
            <div>
                <input 
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disable}
                className={`pt-2 w-76 sm:w-100 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white 
                    ${isInvalid ? 'hidden' : 'border-neutral-500'} focus:outline-none focus:border-white
                    `} 
                />
                {/* {icons ? <Eye/> : <EyeOff/>} */}
            </div>
        </div>
    )
}