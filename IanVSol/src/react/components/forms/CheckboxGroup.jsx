export default function MusicLvlCheckBox({title, options, state, onChange,isInvalid, anyChecked}) {
    return (
        <div className="md:grid ml-1 text-white">
            <p className={`text-sm font-bold pt-6 md:pt-10 lg:pt-6 2xl:pt-8  ${isInvalid ? "hidden" : "border-gray-400"}`}>{title}</p>
            <div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:flex gap-3 pt-6'>
                {options.map((op) => {
                    const thisIsChecked = state[op.name];
                    const shouldDissable = anyChecked && !thisIsChecked;
                    return (
                        <label key={op.name} className={`flex items-center gap-2 ${isInvalid ? "hidden" : "border-gray-400"}
                        ${shouldDissable ? "opacity-40 cursor-not-allowed" : ""}
                        `}>
                            {op.label}
                            <input 
                            type="checkBox"
                            name={op.name}
                            checked={state[op.name]}
                            onChange={onChange}
                            disabled={shouldDissable}
                            className={`appearance-none
                                w-5 h-5 
                                border-2 border-gray-400
                                rounded-2xl
                                cursor-pointer
                                hover:scale-105
                                checked:bg-purple-700
                                transition
                                ${isInvalid ? "hidden" : "border-gray-400"}
                                ${shouldDissable ? "opacity-40 cursor-not-allowed" : ""}
                                `
                            }
                            />
                        </label>    
                    )
                })}
            </div>
        </div>
    )
}