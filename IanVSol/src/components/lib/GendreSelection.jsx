import  {musicCreationTypes}  from "./GendresList"
import { customStyles } from "./styles/SelectStyles"
import  Select  from "react-select"
import  makeAnimated from "react-select/animated"

export default function GendreSelection() {
    const animatedComponents = makeAnimated() 
    return (
        <div className="">
            <Select
                isMulti
                closeMenuOnSelect={false}
                onChange={(selectedOption) => {
                    console.log(selectedOption)
                }}
                options={musicCreationTypes}
                components={animatedComponents}
                styles={customStyles}
                className="bg-black text-white"
            />
        </div>
    )
}