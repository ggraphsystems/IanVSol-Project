import { twMerge } from 'tailwind-merge'
import { useState, useEffect, use } from 'react'
import { Day, DayPicker, getDefaultClassNames } from "react-day-picker"
import "react-day-picker/style.css"
import ModalCalendar from './ModalCalendar';
import { ClipLoader } from "react-spinners"

export default function ServicesForm() {
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
        const isFavoriteMusicGender = form.musicGender.trim().length < 6;
        const isMusicWannacreated = form.musicCreation.trim().length < 6;
        const isMusicRealeased = Object.values(form2).includes(true)
        const isCheckboxSelectedYesNo = form2.musicRealeaseYes
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
                className="pt-2 w-80 lg:w-103 2xl:w-130 bg-black border-b border-neutral-500 focus:outline-none focus:border-white" type="text" />
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
                className="pt-2 w-80 lg:w-103 2xl:w-130 bg-black border-b border-neutral-500 focus:outline-none focus:border-white" type="number" />
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
                className="pt-2 w-80 lg:w-103 2xl:w-130 bg-black border-b border-neutral-500 focus:outline-none focus:border-white" type="number" />
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
                className="pt-2 w-80 lg:w-103 2xl:w-130 bg-black border-b border-neutral-500 focus:outline-none focus:border-white  " type="email" />
                </>
            ),
            level:"Required"
        },
        {
            text:'Which you consider that is you musician level?',
            text2:'Musician Level',
            input:(
                <>
                <div className='grid ml-1'>
                    <div className='flex gap-5 pt-2'>
                        
                        {/* --------- BASIC -------- */}
                        <label className={`${isAnylevelSelected && !form.basicLevel ? 'text-neutral-600 opacity-50':'bg-black' }`} disabled={isAnylevelSelected && !form.basicLevel} htmlFor="">Basic</label>
                        <input checked={form.basicLevel} onChange={handleCheck} name="basicLevel" type="checkbox" className={`${isAnylevelSelected && !form.basicLevel ? 'text-black opacity-50':'bg-black' }`} disabled={isAnylevelSelected && !form.basicLevel && isEmail} />

                        {/* --------- INTERMIDIATE -------- */}
                        <label className={`${isAnylevelSelected && !form.intermidiateLevel ? 'text-neutral-600 opacity-50':'bg-black' }`} disabled={isAnylevelSelected && !form.intermidiateLevel} htmlFor="">Intermidiate</label>
                        <input checked={form.intermidiateLevel} onChange={handleCheck} name='intermidiateLevel' className={`${isAnylevelSelected && !form.intermidiateLevel ? 'text-black opacity-50':'bg-black' }`} disabled={isAnylevelSelected && !form.intermidiateLevel && isEmail} type="checkbox" />
                        
                        {/* --------- ADVANCED -------- */}
                        <label className={`${isAnylevelSelected && !form.advanceLevel ? 'text-neutral-600 opacity-50':'bg-black' }`} disabled={isAnylevelSelected && !form.advanceLevel} htmlFor="">Advance</label>
                        <input checked={form.advanceLevel} onChange={handleCheck} name='advanceLevel' className={`${isAnylevelSelected && !form.advanceLevel ? 'text-black opacity-50' : 'bg-black'}`} disabled={isAnylevelSelected && !form.intermidiateLevel && isEmail} type="checkbox" />

                        {/* --------- PROFESSIONAL -------- */}
                        <label className={`${isAnylevelSelected && !form.professionalLavel ? 'text-neutral-600 opacity-50':'bg-black' }`} disabled={isAnylevelSelected && !form.professionalLavel} htmlFor="">Professional</label>
                        <input checked={form.professionalLavel} onChange={handleCheck} name='professionalLavel' className={`${isAnylevelSelected && !form.professionalLavel ? 'text-black opacity-50' : 'bg-black'}`} disabled={isAnylevelSelected && !form.intermidiateLevel && isEmail} type="checkbox" />
                    </div>
                </div>
                </>
            ),
            level:"Required"
        },
        {
            text:'Favorite Music Gender',
            text2:'FavoriteMusic',
            input:(
                <>
                <input 
                id="FavoriteMusic"
                name="FavoriteMusic"
                value={form.musicGender}
                disabled={!isCheckboxSelected}
                onChange={e => setForm({...form, musicGender: e.target.value})}
                className="pt-2 w-80 lg:w-103 2xl:w-130 bg-black border-b border-neutral-500 focus:outline-none focus:border-white" type="text" />
                </>
            ),
            level:"Required"
        },
        {
            text:'Which type of music do you wanna make?',
            text2:'makemusic',
            input:(
                <>
                <input
                id="musicCreation"
                name="musicCreation"
                value={form.musicCreation}
                disabled={isFavoriteMusicGender}
                onChange={e => setForm({...form, musicCreation: e.target.value})}
                className="pt-2 w-80 lg:w-103 2xl:w-130 bg-black border-b border-neutral-500 focus:outline-none focus:border-white" type="text" />
                </>
            ),
            level:"Optional"
        },
        {
            text:'Have you already realease a song?',
            text2:'songrealease',
            input:(
                <>
                <div className='ml-1 grid'>
                    <div className='flex gap-5 pt-2'>
                        <label className={`${isMusicRealeased && !form2.musicRealeaseYes
                            ? 'text-neutral-600 opacity-50' : 'bg-black'
                        }`} disabled={isMusicRealeased && !form2.musicRealeaseYes} htmlFor="">Yes</label>
                        <input 
                        id="songrealeaseYes"
                        name="musicRealeaseYes"
                        checked={form2.musicRealeaseYes}
                        onChange={handleCheckYesNo}
                        className={`${isMusicRealeased && !form2.musicRealeaseYes
                            ? 'text-black opacity-50':'bg-white'
                        }`}
                        disabled={isMusicRealeased && !form2.musicRealeaseYes && isMusicWannacreated}
                         type="checkbox" />
                        <label className={`${isMusicRealeased && !form2.musicRealeaseNo
                            ? 'text-neutral-600 opacity-50' : 'bg-black'
                        }`}  disabled={isMusicRealeased && !form2.musicRealeaseNo} htmlFor="">No</label>
                        <input 
                        id="songrealeaseNo"
                        name="musicRealeaseNo"
                        checked={form2.musicRealeaseNo}
                        onChange={handleCheckYesNo}
                        className={`${isMusicRealeased && !form2.musicRealeaseNo 
                            ? 'text-black opacity-50':'bg-black'
                        }`}
                        disabled={isMusicRealeased && !form2.musicRealeaseNo && isMusicWannacreated} type="checkbox" />
                        <div className='ml-10'>
                            <label className={`${!isCheckboxSelectedYesNo 
                                        ? 'bg-black text-black opacity-0 active'
                                        :'text-sm font-bold pt-6' 
                            }`} disabled={isMusicRealeased && !form2.musicRealeaseYes} htmlFor="">Share link <span>(optional)</span></label>
                            <input className={`${!isCheckboxSelectedYesNo
                                    ? 'bg-black text-black opacity-0 active'
                                    :'pt-2 w-80 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white'
                            }`} disabled={isMusicRealeased && !form2.musicRealeaseNo && isMusicWannacreated} type="text" />
                        </div>
                    </div>
                </div>
                </>
            ),
            level:"Optional"
        },
    ]
    
    
    return (
        <section className="pt-20 mx-auto max-w-sm overflow-hidden rounded-xl shadow-md sm:max-w-md md:max-w-3xl lg:max-w-6xl 2xl:max-w-6xl">
            <form onSubmit={handleSubmit}>
                <div className="font-mono text-sm space-y-6 pt-6 sm:px-2 md:px-3 lg:px-1 2xl:px-10 text-white">
                    <h1>Test</h1>
                    <div>
                        {formInformation.map((inputName, index) => (
                            <div className="ml-1 md:ml-0 grid" key={index}>
                                <label className={twMerge("text-sm font-bold pt-4", 
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
                                inputName.text2 === "FavoriteMusic" && `${!isCheckboxSelected
                                    ? 'bg-black text-black opacity-0 active'
                                    :'text-sm font-bold pt-6' 
                                    }`,
                                inputName.text2 === "makemusic" && `${isFavoriteMusicGender
                                    ? 'bg-black text-black opacity-0 active'
                                    :'text-sm font-bold pt-6' 
                                    }`,
                                inputName.text2 === "songrealease" && `${isMusicWannacreated
                                    ? 'bg-black text-black opacity-1 focus:opacity-50 active:bg-neutral-500'
                                    :'text-sm font-bold pt-6' 
                                    }`,
                                inputName.text2 === "sharedlink" && `${!isCheckboxSelectedYesNo
                                    ? 'bg-black text-black opacity-0 active'
                                    :'text-sm font-bold pt-6' 
                                    }`,
                                inputName.input === "Schedule the date" && `${isLink
                                    ? 'bg-black text-black opacity-0 active'
                                    :'text-sm font-bold pt-6' 
                                    }`,


                                    )} htmlFor="">{inputName.text}</label>


                                <label className={twMerge("pt-2 w-80 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white",
                                inputName.text === "Phone Number" && ` ${ isfullname 
                                    ? 'bg-black text-black opacity-0'
                                    : 'pt-2 w-80 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white'
                                    }`,
                                inputName.text === "Age" && ` ${ isPhoneNumber 
                                    ? 'bg-black text-black opacity-0 active'
                                    : 'pt-2 w-80 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white'
                                    }`,
                                inputName.text === "Email" && ` ${ isAge 
                                    ? 'bg-black text-black opacity-0 active'
                                    : 'pt-2 w-80 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white'
                                    }`,
                                inputName.text2 === "Musician Level" && ` ${ isEmail 
                                    ? 'bg-black text-black opacity-0 active'
                                    : 'pt-2 w-80 lg:w-103 2xl:w-130 border-b border-black'
                                    }`,
                                inputName.text2 === "FavoriteMusic" && `${ !isCheckboxSelected
                                    ? 'bg-black text-black opacity-0 active'
                                    :'pt-2 w-80 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white' 
                                    }`,
                                inputName.text2 === "makemusic" && `${ isFavoriteMusicGender
                                    ? 'bg-black text-black opacity-0 active'
                                    :'pt-2 w-80 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white' 
                                    }`,
                                inputName.text2 === "songrealease" && `${ isMusicWannacreated
                                    ? 'bg-black text-black opacity-0 active'
                                    :'pt-2 w-80 lg:w-103 2xl:w-130 border-b border-black' 
                                    }`,
                                inputName.text2 === "sharedlink" && `${ !isCheckboxSelectedYesNo
                                    ? 'bg-black text-black opacity-0 active'
                                    :'pt-2 w-80 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white' 
                                    }`,
                                
                                    )} htmlFor="">{inputName.input}</label>
                            </div>
                        ))}
                    </div>  
                    <button onClick={() => setismodalOpen(true)} className={`w-24 p-2 bg-white hover:bg-purple-500 hover:scale-105 transition-transform text-black hover:text-white rounded-2xl
                        ${!isCheckboxSelectedYesNo
                            ? "bg-black text-black opacity-0 active"
                            : "w-24 p-2 bg-white hover:bg-purple-500 hover:scale-105 transition-transform text-black hover:text-white rounded-2xl"
                        }
                        `}>Schedule Date</button>
                        
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
                        {/* <div className='w-80'>
                        </div> */}
                    </ModalCalendar>
                    <div>
                        <span className='text-neutral-400'>Selected Date: {selectedDate?.toDateString()}</span>
                    </div>

                    <div className="grid ml-1 md:ml-0">
                        <label className={`pt-4 text-sm font-bold mb-2 
                            ${!isCheckboxSelectedYesNo
                                ? 'bg-black text-black opacity-0 active'
                                : 'pt-4 text-sm font-bold mb-2'
                            }`}>
                        Message: <span className="text-neutral-600 hover:text-neutral-400">(required)</span>
                        </label>
                        <textarea
                        className={`bg-transparent w-80 lg:w-105 2xl:w-126 px-1 h-20 border border-neutral-700 focus:outline-none focus:border-white 
                            ${!isCheckboxSelectedYesNo
                                ? "bg-black text-black opacity-0 active"
                                : "bg-transparent w-80 lg:w-105 2xl:w-126 px-1 h-20 border border-neutral-700 focus:outline-none focus:border-white"
                            }
                            `}
                        id="message"
                        value={form.message}
                        onChange={e => setForm({...form, message: e.target.value})}
                        ></textarea>
                        <span className="text-neutral-600 text-sm ml-83 sm:ml-96 md:ml-72 lg:ml-98 2xl:ml-120">
                        →
                        </span> 
                    </div>
                </div>
                <button
                    onClick={() => setLoading(true)}
                    disabled={isFormIncomplete}
                    type="submit"
                    onTouch
                    className={`w-24 p-2 bg-white hover:bg-purple-500 hover:scale-105 transition-transform text-black hover:text-white rounded-2xl
                        ${!isCheckboxSelectedYesNo
                            ? "bg-black text-black opacity-0 active"
                            : "w-24 p-2 bg-white hover:bg-purple-500 hover:scale-105 transition-transform text-black hover:text-white rounded-2xl"
                        }
                        ${pressed
                            ? 'focus:bg-purple-600 active:bg-purple-600'
                            : "bg-white active:text-white"
                        }
                        ${isFormIncomplete || !isCheckboxSelectedYesNo
                            ? 'opacity-50 cursor-not-allowed bg-neutral-500 focus:opacity-50 active:bg-neutral-500'
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

        </section>
    )
}