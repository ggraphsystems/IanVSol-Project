export default function TestForm() {
    const formInformation = [
        {
            text:'Full Name',
            input:(
                <>
                <input className="bg-white/30" type="text" />
                </>
            )
        }
    ]
    
    
    const checks = [
        {
            checkName: "Basic",
            checkBox:(
                <>
                <input type="checkbox" />
                </>
            )          
        },
        {
            checkName: "Intermidiate",
            checkBox:(
                <>
                <input type="checkbox" />
                </>
            )          
        },
        {
            checkName: "Advance",
            checkBox:(
                <>
                <input type="checkbox" />
                </>
            )          
        },
        {
            checkName: "Professional",
            checkBox:(
                <>
                <input type="checkbox" />
                </>
            )          
        },
    ]
    
    
    return (
        <div className="text-white">
            <h1>Test</h1>
            <div>
                {checks.map((item, index) => (
                    <div className="md:flex" key={index}>
                        <label className="text-sm font-bold">{item.checkName}</label>
                        <label htmlFor="">{item.checkBox}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}