import  Select  from "react-select"
import  {musicCreationTypes}  from "../musicData/GendresList"
import  makeAnimated from "react-select/animated"
import { customStyles } from "../musicData/styles/SelectStyles"

export default function SelectMusic({optionSelected, setisSelectedOption}) {
    const animatedComponents = makeAnimated()
    return(
        <div className='w-80 pt-4 md:w-125 text-white'>            
            <Select
                isMulti
                closeMenuOnSelect={false}
                onChange={(selectedOption) => {
                    console.log(selectedOption)
                    const values = selectedOption.map(item => item.value);
                    setisSelectedOption(values)
                    console.log(optionSelected)
                    
                }}
                options={musicCreationTypes}
                components={animatedComponents}
                styles={customStyles}
                className="bg-black text-white"
            />
        </div>
    )
}