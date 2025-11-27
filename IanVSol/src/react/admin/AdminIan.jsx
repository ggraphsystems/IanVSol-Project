import { useEffect, useState } from "react";
import CalendarDatePicker from "../components/forms/CalendarDayPicker";
import supabase from "../supabase-client";

export default function Admin() {
    const [selectedMeetngDate, setSelectedMeetingDate] = useState(undefined)
    const [dateDisabled, setdateDisabled] = useState("")
    const meetingList = []

    const handleSubmit = () =>  {
        addMeetingDate_toSupaBase()
    }

    useEffect(() => {
        getMeetingDates()
    }, [])

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

    const getMeetingDates = async () => {
        const { data, error } = await supabase.from("CalendarDates").select("date");
        if (error) {
            console.log("we got an error fetching date from supabase: ", error)
        } else{
            console.log("successfully fetch", data)
        }
        meetingList.push(data.map(item => item.date))
        const itemLength = meetingList.map(item => item.length)
        const num = itemLength[0]
        const meetingDateRes = meetingList.map(item => item[num - 1])
        const formatedMeeting = meetingDateRes[0]
        setdateDisabled(formatedMeeting)
    }
    console.log("Saved Date: ", dateDisabled)
    
    return(
        <section className="pt-44 mx-auto max-w-sm overflow-hidden rounded-xl shadow-md sm:max-w-md md:max-w-3xl lg:max-w-6xl 2xl:max-w-6xl">
            <div className="px-2 grid lg:ml-10 md:grid-cols-2 gap-16 lg:mr-18 item-center">
                <div className="font-mono text-sm space-y-6 sm:px-2 md:px-1 lg:px-0 2xl:px-10 text-white">
                    <h3
                    class="text-3xl sm:text-4xl mb-20 md:mb-5 ml-8 md:ml-1 text-white lg:ml-0 md:text-4xl font-bold"
                    >
                    HI Ian, Welcome Back!
                    </h3>
                    <p
                    class="w-80 ml-5 md:mb-7 -mb-15 lg:-mb-6 md:ml-0 md:w-base text-neutral-300 px-2 pb-30 md:pb-1 lg:pb-10 text-sm md:text-sm 2xl:w-lg lg:-ml-1 text-text-secondary-light dark:text-text-secondary-dark"
                    >
                    Remember, you can save here all the dates in where you are not able to get a meeting with someone.
                    </p>
                <form onSubmit={handleSubmit}>
                    <CalendarDatePicker
                        selectedDate={selectedMeetngDate}
                        setSelectedDate={setSelectedMeetingDate}
                        buttonTitle="Get reserve you date"
                    />
                </form>
                <div className='pt-4 ml-6 -mb-0.5 md:ml-1'>
                    <span className={`text-neutral-400 `}>Disabled Date: {dateDisabled}</span>
                </div>
                </div>
            </div>
        </section>
    )
}