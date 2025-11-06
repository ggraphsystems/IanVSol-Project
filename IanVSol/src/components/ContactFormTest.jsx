import { twMerge } from 'tailwind-merge'
import { useState, useEffect, use } from 'react'

export default function TestForm() {
     const [form, setForm] = useState({
            fullname:"",
            phoneNumber: "",
            age:"",
            email: "",
            basicLevel:"",
            intermidiateLevel:"",
            advanceLevel:"",
            professionalLavel:"",
            musicGender:"",
            musicCreation:"",
            musicRealease:"",
            link:"",
            dateScheduled:"",
            message: ""
          });

          const isfullname = form.fullname.trim().length < 5;
          const isPhoneNumber = form.phoneNumber.trim().length < 6;
          const isAge = form.age.trim().length < 2;
          const isEmail = form.email.trim().length < 6;
          const isBasicLevel = form.basicLevel.trim() === "";    
          // const isBasicLevel = Object.values(form.basicLevel).some(value =>  value === "" || value === false);
          const isFavoriteMusicGender = form.musicGender.trim() === "";
          const isLink = form.link.trim().length < 10
          const isDataSchedule = form.dateScheduled.trim() === "";
          const isFormIncomplete = Object.values(form).some(value => value.trim() === "");
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
               //   disabled={!check}
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
               //   disabled={!check}
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
              //   disabled={!check}
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
                        <label htmlFor="">Basic</label>
                        <input className="" type="checkbox" />
                        <label htmlFor="">Intermidiate</label>
                        <input className="" type="checkbox" />
                        <label htmlFor="">Advance</label>
                        <input className="" type="checkbox" />
                        <label htmlFor="">Professional</label>
                        <input className="" type="checkbox" />
                    </div>
                </div>
                </>
            ),
            level:"Required"
        },
        {
            text:'Favorite Music Gender',
            input:(
                <>
                <input className="" type="text" />
                </>
            ),
            level:"Required"
        },
        {
            text:'Which type of music do you wanna make?',
            input:(
                <>
                <input className="" type="text" />
                </>
            ),
            level:"Optional"
        },
        {
            text:'Have you already realease a song?',
            input:(
                <>
                <input className="" type="text" />
                </>
            ),
            level:"Optional"
        },
        {
            text:'If yes, share the link here please',
            input:(
                <>
                <input className="" type="text" />
                </>
            ),
            level:"Optional"
        },
        {
            text:'Schedule the date',
            input:(
                <>
                <input className="" type="text" />
                </>
            ),
            level:"Required"
        },
        {
            text:'Message',
            input:(
                <>
                <input className="" type="text" />
                </>
            ),
            level:"Optional"
        },
    ]
    
    
    return (
        <section className="pt-40 mx-auto max-w-sm overflow-hidden rounded-xl shadow-md sm:max-w-md md:max-w-3xl lg:max-w-6xl 2xl:max-w-6xl">
            <form action="">
                <div className="font-mono text-sm space-y-6 pt-6 sm:px-2 md:px-3 lg:px-1 2xl:px-10 text-white">
                    <h1>Test</h1>
                    <div>
                        {formInformation.map((inputName, index) => (
                            <div className="ml-1 md:ml-0 grid" key={index}>
                                <label className={twMerge("text-sm font-bold pt-4", 
                                inputName.text === "Phone Number" && `${ isfullname
                                    ? 'opacity-1 cursor-not-allowed focus:opacity-50 active:bg-neutral-500'
                                    : 'text-sm font-bold pt-6'   
                                    }`,
                                inputName.text === "Age" && `${ isPhoneNumber
                                    ? 'opacity-1 cursor-not-allowed focus:opacity-50 active:bg-neutral-500'
                                    : 'text-sm font-bold pt-6'   
                                    }`,
                                inputName.text === "Email" && `${ isAge
                                    ? 'opacity-1 cursor-not-allowed focus:opacity-50 active:bg-neutral-500'
                                    : 'text-sm font-bold pt-6'   
                                    }`,
                                inputName.text2 === "Musician Level" && `${ isEmail
                                    ? 'opacity-1 cursor-not-allowed focus:opacity-50 active:bg-neutral-500'
                                    : 'text-sm font-bold pt-6'   
                                    }`,

                                    
                                    )} htmlFor="">{inputName.text}</label>


                                <label className={twMerge("pt-2 w-80 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white", 
                                inputName.text === "Phone Number" && ` ${ isfullname 
                                    ? 'opacity-50 active cursor-not-allowed'
                                    : 'pt-2 w-80 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white'
                                    }`,
                                inputName.text === "Age" && ` ${ isPhoneNumber 
                                    ? 'opacity-50 active cursor-not-allowed'
                                    : 'pt-2 w-80 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white'
                                    }`,
                                inputName.text === "Email" && ` ${ isAge 
                                    ? 'opacity-50 active cursor-not-allowed'
                                    : 'pt-2 w-80 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white'
                                    }`,
                                inputName.text2 === "Musician Level" && ` ${ isEmail 
                                    ? 'opacity-50 active cursor-not-allowed'
                                    : 'pt-2 w-80 lg:w-103 2xl:w-130'
                                    }`,
                                    )} htmlFor="">{inputName.input}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </form>

        </section>
    )
}