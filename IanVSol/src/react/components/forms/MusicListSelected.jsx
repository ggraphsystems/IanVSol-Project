import  Select  from "react-select"
import  {musicCreationTypes}  from "../musicData/GendresList"
import  makeAnimated from "react-select/animated"
import { customStyles } from "../musicData/styles/SelectStyles"

export default function SelectMusic({optionSelected, setisSelectedOption, isInvalid, disable}) {
    const animatedComponents = makeAnimated()
    return(
        <div className='w-80 sm:w-100 lg:w-128 pt-4 md:w-80 text-white'>            
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
                className={`bg-black text-white
                    ${isInvalid ? "hidden" : "bg-black text-white"}
                    `}                
            />
        </div>
    )
}