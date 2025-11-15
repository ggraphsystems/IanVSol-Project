import { twMerge } from 'tailwind-merge'
import { useState, useEffect, use } from 'react'
import { Day, DayPicker, getDefaultClassNames } from "react-day-picker"
import "react-day-picker/style.css"
import ModalCalendar from '../ModalCalendar';
import { ClipLoader } from "react-spinners";
import  {musicCreationTypes}  from "../lib/GendresList"
import { customStyles } from "../lib/styles/SelectStyles"
import  Select  from "react-select"
import  makeAnimated from "react-select/animated"
import {Calendar}  from 'feather-icons-react'


export default function ServicesForm() {
        const animatedComponents = makeAnimated()
        const [loading, setLoading] = useState(false)
        const [pressed, setisPressed] = useState(false) 
        const [form, setForm] = useState({
            fullname:"",
            phoneNumber: "",
            age:"",
            email: "",
            basicLevel:false,
            intermidiateLevel:false,
            advanceLevel:false,
            professionalLavel:false,
            musicGender:"",
            musicCreation:"",
            link:"",
            dateScheduled:"",
            message: ""
          });

        const [form2, setForm2] = useState({
            musicRealeaseYes:false,
            musicRealeaseNo:false,
        })

        const [optionSelected, setisSelectedOption] = useState([])
        const gendreSelectedList = []

        const [selected, setSelected] = useState(new Date());
        console.log(selected)
        const [selectedDate, setSelectedDate] = useState(undefined)

        const modifers = {selected: selectedDate};
        if (selectedDate) {
            modifers.selected = selectedDate;
        }

        const defaultClassNames = getDefaultClassNames();
        const [modalOpen, setismodalOpen] = useState(false)

        const isfullname = form.fullname.trim().length < 5;
        const isPhoneNumber = form.phoneNumber.trim().length < 6;
        const isAge = form.age.trim().length < 2;
        const isEmail = form.email.trim().length < 6;
        const isAnylevelSelected = Object.values(form).includes(true)
        const isCheckboxSelected = form.basicLevel || form.intermidiateLevel || form.advanceLevel || form.professionalLavel
        const isMusicWannacreated = optionSelected.length > 0;
        const isMusicRealeased = Object.values(form2).includes(true)
        const isCheckboxSelectedYes = form2.musicRealeaseYes
        const isCheckboxSelectedNo = form2.musicRealeaseNo
        const isLink = form.link.trim().length < 10
        const isDataSchedule = form.dateScheduled.trim() === "";
        const isFormIncomplete = form.message.trim().length < 6;


        const handleCheck = (e) => {
            // const isChecked = e.target.checked;
            // setForm(form.basicLeve)
            // setisCheckBoxValue(isChecked ? console.log(e.target.value) : console.log(""))
            const {name, checked} = e.target;
            setForm((prevForm) => ({
                ...prevForm,
                [name]:checked,
            }));
            console.log(name)
          }

        const handleCheckYesNo = (e) => {
            const {name, checked} = e.target;
            setForm2((prevForm) => ({
                ...prevForm,
                [name]:checked,
            }));
            console.log(name)
        }

        

        const handleSubmit = async e => {
            e.preventDefault()
            console.log(
                form.fullname, 
                form.phoneNumber, 
                form.age,
                form.email,
                form.basicLevel,
                form.intermidiateLevel,
                form.advanceLevel,
                form.professionalLavel,
                form.musicGender,
                form.musicCreation,
                form.musicRealease,
                form.link,
                form.dateScheduled,
                form.message)
            // setLoading(true)
            // try {
            //     const response = await fetch("https://adg4x2g63h.execute-api.us-east-2.amazonaws.com/prod/send-email", {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type':'application/json',
            //         },
            //         body: JSON.stringify({
            //             name:form.fullname,
            //             subject:form.email,
            //             phone:form.phoneNumber,
            //             instagram:instagram,
            //             message:form.messageaz
            //         }),
            //     });
    
            //     if (!response.ok) {
            //         throw new Error(`HTTP error! status: ${response.status}`);
            //     }
            //     window.alert("Thanks for reaching out! I'll be contacting you as soon as possible!")    
                
            //     setLoading(false)
            //     setismodalOpen(true)
            //     const result = await response.json();
            //     console.log(result)
    
                
            //   } catch (error) {
            //     console.log(error)
            //     setLoading(false)
            //   } 
            //   setTimeout(() => {
            //     setForm(
            //         {
            //             fullname:"",
            //             phoneNumber: "",
            //             email: "",
            //             message: ""}
            //         )
            //     setInstagram("")
            //   }, 800)
            // finally{
            //     console.log("Operation finish")
            //   }
        }
        
        const formInformation = [
            {
                text:'Full Name',
                input:(
                    <>
                    <input
                    ype="text"
                    id="favoritemusicgender"
                    name="favoritemusicgender"
                  //   disabled={!check}
                    value={form.fullname}
                    onChange={e => setForm({...form, fullname: e.target.value})}
                    className="pt-2 w-75 lg:w-103 2xl:w-130 bg-black border-b border-neutral-500 focus:outline-none focus:border-white" type="text" />
                    </>
                ),
                level:"Required"
            },
            {
                text:'Phone Number',
                input:(
                    <>
                    <input 
                     ype="text"
                     id="phoneNumber"
                     name="phoneNumber"
                     disabled={isfullname}
                     value={form.phoneNumber}
                     onChange={e => setForm({...form, phoneNumber: e.target.value})}
                    className="pt-2 w-75 lg:w-103 2xl:w-130 bg-black border-b border-neutral-500 focus:outline-none focus:border-white" type="number" />
                    </>
                ),
                level:"Required"
            },
            {
                text:'Age',
                input:(
                    <>
                    <input
                     id="Age"
                     name="Age"
                     disabled={isPhoneNumber}
                     value={form.age}
                     onChange={e => setForm({...form, age: e.target.value})}
                    className="pt-2 w-75 lg:w-103 2xl:w-130 bg-black border-b border-neutral-500 focus:outline-none focus:border-white" type="number" />
                    </>
                ),
                level:"Required"
            },
            {
                text:'Email',
                input:(
                    <>
                    <input 
                    id="Email"
                    name="Email"
                    disabled={isAge}
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    className="pt-2 w-75 lg:w-103 2xl:w-130 bg-black border-b border-neutral-500 focus:outline-none focus:border-white  " type="email" />
                    </>
                ),
                level:"Required"
            },
            {
                text:'Which you consider that is you musician level?',
                text2:'Musician Level',
                input:(
                    <>
                    <div className='md:grid ml-1'>
                        <div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:flex gap-3 pt-3'>
                            
                            {/* --------- BASIC -------- */}
                            <label className={`${isAnylevelSelected && !form.basicLevel ? 'text-neutral-600 opacity-50':'bg-black' }`} disabled={isAnylevelSelected && !form.basicLevel} htmlFor="">Basic</label>
                            <input checked={form.basicLevel} onChange={handleCheck} name="basicLevel" type="checkbox" className={` appearance-none
                                w-5 h-5 
                                border-2 border-gray-400
                                rounded-2xl
                                cursor-pointer
                                hover:scale-105
                                checked:bg-purple-700
                                transition
                                ${isAnylevelSelected && !form.basicLevel ? 'opacity-50 cursor-not-allowed':'hover:border-purple-700' }
                                `} disabled={isAnylevelSelected && !form.basicLevel } />
        
                            {/* --------- INTERMIDIATE -------- */}
                            <label className={`${isAnylevelSelected && !form.intermidiateLevel ? 'text-neutral-600 opacity-50':'bg-black' }`} disabled={isAnylevelSelected && !form.intermidiateLevel} htmlFor="">Intermidiate</label>
                            <input checked={form.intermidiateLevel} onChange={handleCheck} name='intermidiateLevel' className={`
                                appearance-none
                                w-5 h-5 
                                border-2 border-gray-400
                                rounded-2xl
                                cursor-pointer
                                hover:scale-105
                                checked:bg-purple-700
                                transition
                                ${isAnylevelSelected && !form.intermidiateLevel ? 'opacity-50 cursor-not-allowed':'hover:border-purple-700' }`} disabled={isAnylevelSelected && !form.intermidiateLevel} type="checkbox" />
                            
                            {/* --------- ADVANCED -------- */}
                            <label className={`${isAnylevelSelected && !form.advanceLevel ? 'text-neutral-600 opacity-50':'bg-black' }`} disabled={isAnylevelSelected && !form.advanceLevel} htmlFor="">Advance</label>
                            <input checked={form.advanceLevel} onChange={handleCheck} name='advanceLevel' className={`
                                appearance-none
                                w-5 h-5 
                                border-2 border-gray-400
                                rounded-2xl
                                cursor-pointer
                                hover:scale-105
                                checked:bg-purple-700
                                transition
                                ${isAnylevelSelected && !form.advanceLevel ? 'opacity-50 cursor-not-allowed' : 'hover:border-purple-700'}`} disabled={isAnylevelSelected && !form.advanceLevel} type="checkbox" />
        
                            {/* --------- PROFESSIONAL -------- */}
                            <label className={`${isAnylevelSelected && !form.professionalLavel ? 'text-neutral-600 opacity-50':'bg-black' }`} disabled={isAnylevelSelected && !form.professionalLavel} htmlFor="">Professional</label>
                            <input checked={form.professionalLavel} onChange={handleCheck} name='professionalLavel' className={`
                                appearance-none
                                w-5 h-5 
                                border-2 border-gray-400
                                rounded-2xl
                                cursor-pointer
                                hover:scale-105
                                checked:bg-purple-700
                                transition
                                ${isAnylevelSelected && !form.professionalLavel ? 'opacity-50 cursor-not-allowed' : 'hover:border-purple-700'}`} disabled={isAnylevelSelected && !form.professionalLavel} type="checkbox" />
                        </div>
                    </div>
                    </>
                ),
                level:"Required"
            },
            {
                text:'Which type of music do you wanna make?',
                text2:'makemusic',
                input:(
                    <>
                    <Select
                        isMulti
                        closeMenuOnSelect={false}
                        onChange={(selectedOption) => {
                            console.log(selectedOption)
                            setisSelectedOption(selectedOption || [])
                            console.log("This is from the useState: ", optionSelected)
                            gendreSelectedList.push(selectedOption)
                            console.log("This is the list: ", gendreSelectedList)
                            gendreSelectedList.forEach(item => {
                                console.log("For each of the list: ", item)
                            })
                            
                        }}
                        options={musicCreationTypes}
                        components={animatedComponents}
                        styles={customStyles}
                        className="bg-black text-white"
                    />
                    </>
                ),
                level:"Optional"
            },
            {
                text:'Have you already realease a song?',
                text2:'songrealease',
                input:(
                    <>
                    <div className='md:ml-1 grid'>
                        <div className='flex gap-3 pt-2'>
                            <label className={`${isMusicRealeased && !form2.musicRealeaseYes
                                ? 'text-neutral-600 opacity-50' : 'bg-black'
                            }`} disabled={isMusicRealeased && !form2.musicRealeaseYes} htmlFor="">Yes</label>
                            <input 
                            id="songrealeaseYes"
                            name="musicRealeaseYes"
                            checked={form2.musicRealeaseYes}
                            onChange={handleCheckYesNo}
                            className={`
                                appearance-none
                                w-5 h-5 
                                border-2 border-gray-400
                                rounded-2xl
                                cursor-pointer
                                hover:scale-105
                                checked:bg-purple-700
                                transition
                                ${isMusicRealeased && !form2.musicRealeaseYes
                                ? 'opacity-50 cursor-not-allowed' : 'hover:border-purple-700'
                            }`}
                            disabled={isMusicRealeased && !form2.musicRealeaseYes}
                             type="checkbox" />
                            <label className={`${isMusicRealeased && !form2.musicRealeaseNo
                                ? 'text-neutral-600 opacity-50' : 'bg-black'
                            }`}  disabled={isMusicRealeased && !form2.musicRealeaseNo} htmlFor="">No</label>
                            <input 
                            id="songrealeaseNo"
                            name="musicRealeaseNo"
                            checked={form2.musicRealeaseNo}
                            onChange={handleCheckYesNo}
                            className={`
                                appearance-none
                                w-5 h-5 
                                border-2 border-gray-400
                                rounded-2xl
                                cursor-pointer
                                hover:scale-105
                                checked:bg-purple-700
                                transition
                                ${isMusicRealeased && !form2.musicRealeaseNo 
                                ? 'opacity-50 cursor-not-allowed' : 'hover:border-purple-700'
                            }`}
                            disabled={isMusicRealeased && !form2.musicRealeaseNo } type="checkbox" />
                        </div>
                            <div className='pt-4'>
                                <label className={`${!isCheckboxSelectedYes
                                            ? 'bg-black text-black opacity-0 active'
                                            :'text-sm font-bold' 
                                }`} disabled={isMusicRealeased && !form2.musicRealeaseYes} htmlFor="">Share link 
                                <span className={`ml-3 text-neutral-600`}>(optional)</span></label>
                                <input className={`
                                    ${!isCheckboxSelectedYes
                                        ? 'bg-black text-black opacity-0 active'
                                        :'w-60 pt-1 text-neutral-3s00 lg:w-03 2xl:w-50 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white'
                                    }
                                `} disabled={form2.musicRealeaseNo} type="text" />
                            </div>
                    </div>
                    </>
                ),
                level:"Optional"
            },
        ]
    
    
    
    
    return (
        <section className="pt-44 mx-auto max-w-sm overflow-hidden rounded-xl shadow-md sm:max-w-md md:max-w-3xl lg:max-w-6xl 2xl:max-w-6xl">
        <div className="px-0 -ml-2 lg:ml-20 grid md:grid-cols-2 gap-16 lg:mr-18 item-center">
            <div class="-space-y-6 pt-5 mr-3 ml-3 text-white">
                <img
                alt="Ian, the music producer, smiling."
                class="rounded-lg shadow-lg ml-6 w-80 h-50 md:w-full md:pb-20 md:h-74 object-cover col-span-2 hover:scale-105 transition transform"
                src="/mixIan.jpg"
                />
                <div class="gap-5 pt-15 ml-2 md:pt-0 md:ml-6">
                    <h3 class="text-2xl ml-4 lg:ml-0 md:text-2xl font-bold">
                        Beats
                    </h3>
                    <p
                    class="ml-3 pt-5 w-85 md:ml-0 md:w-base text-neutral-300 px-2 pb-30 md:pb-6 lg:pb-20 text-sm md:text-sm lg:-ml-2 lg:w-110 2xl:w-md text-text-secondary-light dark:text-text-secondary-dark"
                    >
                    With over a decade of experience in the music industry, I've had the
                    pleasure of working with a diverse range of talented artists. My
                    passion is to bring a creative vision to life through sound, ensuring
                    every track is polished, powerful, and emotionally resonant.
                    </p>
                </div>
            </div>
                <form onSubmit={handleSubmit}>
                    <div className="font-mono text-sm space-y-6 pt-6 sm:px-2 md:px-3 lg:px-0 2xl:px-10 text-white">
                        <h3
                        class="text-3xl w-80 sm:text-4xl mb-20 md:mb-5 ml-8 md:ml-1 text-white lg:ml-0 md:text-4xl font-bold"
                        >
                        Let's get in touch!
                        </h3>
                        <p
                        class="w-80 ml-5 -mb-12 md:mb-2 lg:-mb-3 md:ml-0 md:w-base text-neutral-300 px-2 pb-30 md:pb-1 lg:pb-10 text-sm md:text-sm lg:-ml-1 2xl:w-lg text-text-secondary-light dark:text-text-secondary-dark"
                        >
                        Complete this form below to be able to know you better and contacting you as soon as possible.
                        </p>
                        <div className='ml-3 md:ml-1'>
                            {formInformation.map((inputName, index) => (
                                <div className="ml-5 md:ml-0 grid" key={index}>
                                    <label className={twMerge("text-sm font-bold pt-4  md:pt-8 lg:pt-6 2xl:pt-8", 
                                    inputName.text === "Phone Number" && `${ isfullname
                                        ? 'bg-black text-black opacity-1 focus:opacity-50 active:bg-neutral-500'
                                        : 'text-sm font-bold pt-6'   
                                        }`,
                                    inputName.text === "Age" && `${ isPhoneNumber
                                        ? 'bg-black text-black opacity-1 focus:opacity-50 active:bg-neutral-500'
                                        : 'text-sm font-bold pt-6'   
                                        }`,
                                    inputName.text === "Email" && `${ isAge
                                        ? 'bg-black text-black opacity-1 focus:opacity-50 active:bg-neutral-500'
                                        : 'text-sm font-bold pt-6'   
                                        }`,
                                    inputName.text2 === "Musician Level" && `${ isEmail
                                        ? 'bg-black text-black opacity-1 focus:opacity-50 active:bg-neutral-500'
                                        : 'text-sm font-bold pt-6'   
                                        }`,
                                    inputName.text2 === "makemusic" && `${ !isCheckboxSelected
                                        ? 'bg-black text-black opacity-1 focus:opacity-50 active:bg-neutral-500'
                                        : 'text-sm font-bold pt-6'   
                                        }`,
                                    inputName.text2 === "songrealease" && `${!isMusicWannacreated
                                        ? 'bg-black text-black opacity-1 focus:opacity-50 active:bg-neutral-500'
                                        :'text-sm font-bold pt-6' 
                                        }`,
                                    inputName.text2 === "sharedlink" && `${!isCheckboxSelectedYes
                                        ? 'bg-black text-black opacity-0 active'
                                        :'text-sm font-bold pt-6' 
                                        }`,
                                    inputName.input === "Schedule the date" && `${isLink
                                        ? 'bg-black text-black opacity-0 active'
                                        :'text-sm font-bold pt-6' 
                                        }`,


                                        )} htmlFor="">{inputName.text}</label>


                                    <label className={twMerge("pt-2 w-75 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white",
                                    inputName.text === "Phone Number" && ` ${ isfullname 
                                        ? 'bg-black text-black opacity-0'
                                        : 'pt-2 w-75 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white'
                                        }`,
                                    inputName.text === "Age" && ` ${ isPhoneNumber 
                                        ? 'bg-black text-black opacity-0 active'
                                        : 'pt-2 w-75 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white'
                                        }`,
                                    inputName.text === "Email" && ` ${ isAge 
                                        ? 'bg-black text-black opacity-0 active'
                                        : 'pt-2 w-75 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white'
                                        }`,
                                    inputName.text2 === "Musician Level" && ` ${ isEmail 
                                        ? 'bg-black text-black opacity-0 active'
                                        : 'pt-2 w-75 lg:w-103 2xl:w-130 border-b border-black'
                                        }`,
                                    inputName.text2 === "makemusic" && `${ !isCheckboxSelected
                                        ? 'bg-black text-black opacity-0 active'
                                        :'pt-2 w-75 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white' 
                                        }`,
                                    inputName.text2 === "songrealease" && `${ !isMusicWannacreated
                                        ? 'bg-black text-black opacity-0 active'
                                        :'pt-2 w-75 lg:w-103 2xl:w-130 border-b border-black' 
                                        }`,
                                    inputName.text2 === "sharedlink" && `${ !isCheckboxSelectedYes
                                        ? 'bg-black text-black opacity-0 active'
                                        :'pt-2 w-75 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white' 
                                        }`,
                                    
                                        )} htmlFor="">{inputName.input}</label>
                                </div>
                            ))}
                        </div> 
                        <div className='flex gap-3'>
                            <button onClick={() => setismodalOpen(true)} className={`w-44 p-2 bg-white hover:bg-purple-500 hover:scale-105 transition-transform text-black hover:text-white rounded-2xl
                                ${!isCheckboxSelectedYes && !isCheckboxSelectedNo
                                    ? "bg-black text-black opacity-0 active"
                                    : "w-24 p-2 ml-6 md:ml-0 bg-white hover:bg-purple-500 hover:scale-105 transition-transform text-black hover:text-white rounded-2xl"
                                }
                                `}>Schedule Meeting Date</button>
                                <span className={`pt-3
                                    ${!isCheckboxSelectedYes && !isCheckboxSelectedNo
                                        ? "hidden"
                                        : "pt-2"
                                    }
                                    `}>
                                    <Calendar/>
                                </span>
                        </div> 
                            
                            
                        <ModalCalendar open={modalOpen} onClose={() => setismodalOpen(false)}>
                            <DayPicker
                                animate
                                mode='single'
                                classNames={{
                                    today: `border-amber-500 text-white`, // Add a border to today's date
                                    selected: `bg-purple-500 border-amber-500 text-white`, // Highlight the selected day
                                    root: `${defaultClassNames.root} shadow-lg p-5`, // Add a shadow to the root element
                                    chevron: `${defaultClassNames.chevron} fill-amber-500`,
                                    // chevron: `${defaultClassNames.chevron} fill-amber-100`
                                }}
                                selected={selected}
                                onSelect={setSelected}
                                defaultMonth={new  Date()}
                                modifers={modifers}
                                onDayClick={(day, modifers) => {
                                    if (modifers.selected) {
                                        setSelectedDate(undefined);
                                    } else {
                                        setSelectedDate(day)
                                    }
                                }}
                                footer={
                                    selectedDate ? `You selected: ${selectedDate?.toDateString()}` : "Pick a day."
                                }
                            />
                            {/* <div className='w-75'>
                            </div> */}
                        </ModalCalendar>
                        <div>
                            <span className={`text-neutral-400 ${!isCheckboxSelectedYes && !isCheckboxSelectedNo
                                ? "bg-black text-black opacity-0 active"
                                : "text-neutral-400 ml-6 md:ml-0"
                            }`}>Selected Date: {selectedDate?.toDateString()}</span>
                        </div>
                        <div className="grid ml-1 md:ml-0">
                            <label className={`pt-2 text-sm font-bold mb-2 
                                ${!isCheckboxSelectedYes && !isCheckboxSelectedNo
                                    ? 'bg-black text-black opacity-0 active'
                                    : 'pt-2 text-sm font-bold mb-2 ml-5 md:ml-0'
                                }`}>
                            Message: <span className="text-neutral-600 hover:text-neutral-400">(required)</span>
                            </label>
                            <textarea
                            className={`bg-transparent w-75 lg:w-105 2xl:w-126 px-1 h-20 border border-neutral-700 focus:outline-none focus:border-white 
                                ${!isCheckboxSelectedYes && !isCheckboxSelectedNo
                                    ? "bg-black text-black opacity-0 active"
                                    : "bg-transparent w-75 ml-5 md:ml-0 lg:w-105 2xl:w-126 px-1 h-20 border border-neutral-700 focus:outline-none focus:border-white"
                                }
                                `}
                            id="message"
                            value={form.message}
                            onChange={e => setForm({...form, message: e.target.value})}
                            ></textarea>
                            <span className="text-neutral-600 text-sm ml-69 sm:ml-96 md:ml-65 lg:ml-98 2xl:ml-120">
                            →
                            </span> 
                        </div>
                    </div>
                    <button
                        onClick={() => setLoading(true)}
                        disabled={isFormIncomplete}
                        type="submit"
                        onTouch
                        className={`w-34 mb-30 p-2 ml-5 lg:ml-9 md:ml-0 bg-white hover:bg-purple-500 hover:scale-105 transition-transform text-black hover:text-white rounded-2xl
                            ${!isCheckboxSelectedYes && !isCheckboxSelectedNo
                                ? "bg-black text-black opacity-0 active"
                                : "w-24 p-2 bg-white hover:bg-purple-500 hover:scale-105 transition-transform text-black hover:text-white rounded-2xl"
                            }
                            ${pressed
                                ? 'focus:bg-purple-600 active:bg-purple-600'
                                : "bg-white active:text-white"
                            }
                            ${isFormIncomplete || !isCheckboxSelectedYes && !isCheckboxSelectedNo
                                ? 'cursor-not-allowed bg-neutral-500 focus:opacity-50 active:bg-neutral-500'
                                : 'bg-white hover:bg-purple-500 hover:scale-105 transition-transform text-black hover:text-white focus:bg-purple-600 active:bg-purple-600 cursor-pointer'
                            }
                        `}
                        >
                        {
                            loading ? (
                                <ClipLoader color='purple'
                                    loading={loading}
                                    size={30}
                                    aria-level="Loading Spinner"
                                    data-testid="loader"/> 
                            ) : (
                                "SUBMIT →"
                            )
                        }
                    </button>
                </form>
            </div>
          {/* Contact Information */}

        </section>
    )
}