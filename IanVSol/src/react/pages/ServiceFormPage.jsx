import TextInput from "../components/forms/TextInput";
import MusicLvlCheckBox from "../components/forms/CheckboxGroup";
import MusicListSelected from "../components/forms/MusicListSelected";
import { scheduleMeeting } from "../components/services/Api";
import CalendarDatePicker from "../components/forms/CalendarDayPicker";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import Modal from "../components/ModalEmail";
import supabase from "../supabase-client";

export default function ServiceForm({title, image, description, service}) {
    
    // The user needs to fill this form to get the meeting of the service
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
        message: ""
    });
    
    const [loading, setLoading] = useState(false)
    const [pressed, setisPressed] = useState(false) 
    
    // if the user have realease music or no
    const [form2, setForm2] = useState({
        musicRealeaseYes:false,
        musicRealeaseNo:false,
    })

    // open it up the modal
    const [modalOpen2, setismodalOpen2] = useState()


    // The list of gendres that the user wants to create
    const [optionSelected, setisSelectedOption] = useState([])

    // The level of the music of the user
    const [musicLevelSelected, setmusicLevelSelected] = useState("")
   
    // The level of the music of the user
    const [musicRealeaseYesNo, setmusicRealeaseYesNo] = useState("")

    // The meeting date that the user have choice to get the meeting with Ian
    const [selectedMeetngDate, setSelectedMeetingDate] = useState(undefined)
    
    // adding the user meeting date to ian db
    const addMeetingDate_toSupaBase = async () => {
        const newDate = {
            date: selectedMeetngDate.toDateString(),
        }
        const {data, error} = await supabase
            .from("CalendarDates")
            .insert([newDate])
            .single()

        if (error) {
            console.log("error: ", error)
            
        } else {
            console.log("The date was successfully save into supabase! ", data)
        }
    }


    // dynamic form 
    const isfullname = (form.fullname ?? "").trim().length < 5;
    const isPhoneNumber = (form.phoneNumber ?? "").trim().length < 6;
    const isAge = (form.age ?? "").trim().length < 2;
    const isEmail = (form.email ?? "").trim().length < 6;
    const isAnylevelSelected = Object.values(form).includes(true)
    const isCheckboxSelected = form.basicLevel || form.intermidiateLevel || form.advanceLevel || form.professionalLavel
    const isMusicWannacreated = optionSelected.length > 0;
    const isMusicRealeased = Object.values(form2).includes(true)
    const isCheckboxSelectedYes = form2.musicRealeaseYes
    const isCheckboxSelectedNo = form2.musicRealeaseNo
    const isLink = (form.link ?? "").trim().length < 10
    const isFormIncomplete = (form.message ?? "").trim().length < 1;

    
    const handleCheck = (e) => {
        const {name, checked} = e.target;
    
        setForm(prevForm => ({
            ...prevForm,
            basicLevel: false,
            intermidiateLevel: false,
            advanceLevel: false,
            professionalLavel: false,
            [name]: checked ? true : false,
        }));
        console.log(name)
        setmusicLevelSelected(name)
    }

    const handleCheckYesNo = (e) => {
        const {name, checked} = e.target;
            setForm2(prevForm => ({
                ...prevForm,
                musicRealeaseYes:false,
                musicRealeaseNo:false,
                [name]:checked ? true : false,
            }));
        console.log(name)
        setmusicRealeaseYesNo(name)
    }
    


    const handleSubmit = async (e) => {
        e.preventDefault()
        // api here
        addMeetingDate_toSupaBase()
        const formData = {
            service:service,
            fullname:form.fullname,
            phoneNumber:form.phoneNumber,
            age:form.age,
            subject_email:form.email,
            music_user_created:optionSelected.join(", "),
            music_level:musicLevelSelected,
            realese_song_yes_no:musicRealeaseYesNo,
            shared_link:form.link,
            meeting_date:selectedMeetngDate.toDateString(),
            message:form.message
        }

        try {
            setLoading(true);
            const result = await scheduleMeeting(formData);
            console.log('Form suubmitted:', result)
        } catch (error) {
            setLoading(false)
        }
        setismodalOpen2(true)            

        setForm({
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
         message: ""
        })
        setForm2({
         musicRealeaseYes:false,
         musicRealeaseNo:false,
        })
        setisSelectedOption([])
        setSelectedMeetingDate(undefined)
        // setTimeout(() => {
            
        //  }, 1000);
    }
    

    return(
        <section className="pt-44 mx-auto max-w-sm overflow-hidden rounded-xl shadow-md sm:max-w-md md:max-w-3xl lg:max-w-6xl 2xl:max-w-6xl">
            <div className="px-2 grid lg:ml-10 md:grid-cols-2 gap-16 lg:mr-18 item-center">
                <div class="-space-y-6 mr-3 md:ml-3 text-white">
                    <img
                    alt="Ian, the music producer, smiling."
                    class="rounded-lg shadow-lg ml-6 w-80 h-50 md:w-full md:pb-20 md:h-74 object-cover col-span-2 hover:scale-105 transition transform"
                    src={image}
                    />
                    <div class="gap-5 pt-15 ml-2 md:pt-0 md:ml-6">
                        <h3 class="text-2xl ml-4 md:ml-1 lg:ml-0 md:text-2xl font-bold">
                            {title}
                        </h3>
                        <p
                        class="ml-3 -mb-5 pt-5 w-85 md:ml-0 md:w-base text-neutral-300 px-2 pb-30 md:pb-6 lg:pb-20 text-sm md:text-sm lg:-ml-2 2xl:w-md lg:w-110 text-text-secondary-light dark:text-text-secondary-dark"
                        >
                        {description}
                        </p>
                        
                    </div>
                </div>
                <div className="font-mono text-sm space-y-6 sm:px-2 md:px-1 lg:px-0 2xl:px-10 text-white">
                    <h3
                    class="text-3xl sm:text-4xl mb-20 md:mb-5 ml-8 md:ml-1 text-white lg:ml-0 md:text-4xl font-bold"
                    >
                    Let's get in touch!
                    </h3>
                    <p
                    class="w-80 ml-5 md:mb-7 -mb-15 lg:-mb-6 md:ml-0 md:w-base text-neutral-300 px-2 pb-30 md:pb-1 lg:pb-10 text-sm md:text-sm 2xl:w-lg lg:-ml-1 text-text-secondary-light dark:text-text-secondary-dark"
                    >
                    Complete this form below to be able to know you better and contacting you as soon as possible.
                    </p>
                    <CalendarDatePicker
                        selectedDate={selectedMeetngDate}
                        setSelectedDate={setSelectedMeetingDate}
                        buttonTitle="Schedule Meeting Date"
                    />
                    <form onSubmit={handleSubmit}>
                        <div className='ml-6 md:ml-1'>
                            <div className="ml-1 md:ml-0">
                            <TextInput
                                label="Full Name"
                                name="fullname"
                                value={form.fullname}
                                onChange={(e) => setForm({...form, fullname: e.target.value})}
                                isInvalid={!selectedMeetngDate}
                            />
                            <TextInput
                                label="Phone Number"
                                name="phoneNumber"
                                type="number"
                                value={form.phoneNumber}
                                onChange={(e) => setForm({...form, phoneNumber: e.target.value})}
                                isInvalid={isfullname}
                            />
                            <TextInput
                                label="Age"
                                name="age"
                                type="number"
                                value={form.age}
                                onChange={(e) => setForm({...form, age: e.target.value})}
                                isInvalid={isPhoneNumber}
                            />
                            <TextInput
                                label="Email"
                                name="email"
                                value={form.email}
                                onChange={(e) => setForm({...form, email: e.target.value})}
                                isInvalid={isAge}
                            />
                            <MusicLvlCheckBox
                                title="Which you consider that is you musician level?"
                                options={[
                                    { name: "basicLevel", label: "Basic" },
                                    { name: "intermidiateLevel", label: "Intermediate" },
                                    { name: "advanceLevel", label: "Advanced" },
                                    { name: "professionalLavel", label: "Professional" },
                                ]}
                                state={form}
                                onChange={handleCheck}
                                isInvalid={isEmail}
                                anyChecked={isCheckboxSelected}
                            />
                            <div className="pt-6 md:pt-6">
                                <label className={`text-sm font-bold md:pt-10 lg:pt-10 2xl:pt-8 
                                    ${!isCheckboxSelected
                                        ? "hidden"
                                        : "text-sm font-bold"
                                    }
                                    `}>Which type of music do you wanna make?
                                </label>

                            </div>
                            <MusicListSelected
                                optionSelected={optionSelected}
                                setisSelectedOption={setisSelectedOption}
                                isInvalid={!isCheckboxSelected}
                            />
                            <div className="ml-1 grid">
                                <MusicLvlCheckBox
                                    title="Have you already realease a song?"
                                    options={[
                                        { name: "musicRealeaseYes", label: "Yes" },
                                        { name: "musicRealeaseNo", label: "No" },
                                    ]}
                                    state={form2}
                                    onChange={handleCheckYesNo}
                                    isInvalid={!isMusicWannacreated}
                                />
                                <div className='pt-4'>
                                <label className={`${!isCheckboxSelectedYes
                                            ? 'hidden'
                                            :'text-sm font-bold' 
                                }`} disabled={isMusicRealeased && !form2.musicRealeaseYes} htmlFor="">Share link 
                                <span className={`ml-2 text-neutral-600`}>(optional)</span></label>
                                <input 
                                value={form.link} 
                                onChange={e => setForm({...form, link: e.target.value})} 
                                className={`
                                    ${!isCheckboxSelectedYes
                                        ? 'bg-black text-black opacity-0 active'
                                        :'w-60 pt-1 ml-1 text-neutral-3s00 lg:w-03 2xl:w-50 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white'
                                    }
                                `} disabled={form2.musicRealeaseNo} type="text" />
                            </div>
                            </div>
                            <div className="grid text-white -ml-4 sm:-ml-4 md:ml-1 mt-6">
                                <label className={`pt-2 text-sm font-bold mb-2 
                                    ${!isCheckboxSelectedYes && !isCheckboxSelectedNo
                                        ? 'bg-black text-black opacity-0 active'
                                        : 'pt-2 ml-5 md:ml-0 text-sm font-bold mb-2'
                                    }`}>
                                Message: <span className="text-neutral-600 hover:text-neutral-400">(required)</span>
                                </label>
                                <textarea
                                className={`bg-transparent w-70 lg:w-105 2xl:w-126 px-1 h-20 border border-neutral-700 focus:outline-none focus:border-white 
                                    ${!isCheckboxSelectedYes && !isCheckboxSelectedNo
                                        ? "bg-black text-black opacity-0 active"
                                        : "bg-transparent w-70 ml-5 mb-5 md:ml-0 lg:w-105 2xl:w-126 px-1 h-20 border border-neutral-700 focus:outline-none focus:border-white"
                                    }
                                    `}
                                id="message"
                                value={form.message}
                                onChange={e => setForm({...form, message: e.target.value})}
                                ></textarea>
                            </div>
                            <button
                                disabled={isFormIncomplete}
                                type="submit"
                                className={`w-34 p-2 sm:pt-2 ml-1 lg:ml-1 md:ml-0 bg-white hover:bg-purple-500 hover:scale-105 transition-transform text-black hover:text-white rounded-2xl
                                    ${!isCheckboxSelectedYes && !isCheckboxSelectedNo
                                        ? "bg-black text-black opacity-0 active"
                                        : "w-34 p-2 bg-white hover:bg-purple-500 hover:scale-105 transition-transform text-black hover:text-white rounded-2xl"
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
                            <Modal open={modalOpen2} onClose={() => setismodalOpen2(false)}>
                                <div className='text-center w-86'>
                                    <p className='font-black text-white'>Thank you so much for reaching out, I'll be contacting you in the next couple of days!</p>
                                </div>
                            </Modal>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}