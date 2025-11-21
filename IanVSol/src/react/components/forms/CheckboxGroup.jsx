export default function MusicLvlCheckBox({title, options, state, onChange}) {
    return (
        <div className="md:grid ml-1 text-white">
            <p className="text-sm font-bold md:pt-10 lg:pt-6 2xl:pt-8">{title}</p>
            <div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:flex gap-3 pt-6'>
                {options.map((op) => (
                    <label key={op.name} className="flex items-center gap-2">
                        {op.label}
                        <input 
                        type="checkBox"
                        name={op.name}
                        checked={state[op.name]}
                        onChange={onChange}
                        className="appearance-none
                            w-5 h-5 
                            border-2 border-gray-400
                            rounded-2xl
                            cursor-pointer
                            hover:scale-105
                            checked:bg-purple-700
                            transition"
                        />
                    </label>    
                ))}
            </div>
        </div>
    )
}