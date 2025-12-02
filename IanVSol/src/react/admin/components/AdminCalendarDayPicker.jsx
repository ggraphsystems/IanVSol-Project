import { use, useEffect, useState } from 'react'
import { Day, DayPicker, getDefaultClassNames } from "react-day-picker"
import "react-day-picker/style.css"
import supabase from '../../supabase-client';
import {Calendar}  from 'feather-icons-react'
import AdminModalCalendar from './AdminModalCalendar';



export default function AdminCalendarDatePicker({selectedDate, setSelectedDate, setSelectedMeetingDate, dateDisabled, setdateDisabled}) {
    // const [dateDisabled, setdateDisabled] = useState([])
    const [modalOpen, setismodalOpen] = useState(false)
    const meetingList = []
    const disableDates = dateDisabled.map(d => new Date(d));
    const [pressed, setisPressed] =  useState(false)
    
    const defaultClassNames = getDefaultClassNames();
    const modifers = {selected: selectedDate};
    if (selectedDate) {
        modifers.selected = selectedDate;
    }

    // getting any dates already selected from iandb to put on the calendar
    useEffect(() => {
        getMeetingDates();
    },[])


    const getMeetingDates = async () => {
        const { data, error } = await supabase.from("CalendarDates").select("date");
        if (error) {
            console.log("we got an error fetching date from supabase: ", error)
        } else{
            console.log("successfully fetch", data)
        }
        meetingList.push(data.map(item => item.date))
        console.log(meetingList[0])
        const formattedDate = meetingList[0]
        // const itemLength = meetingList.map(item => item.length)
        // const num = itemLength[0]
        // const meetingDateRes = meetingList.map(item => item[num - 1])
        // const formatedMeeting = meetingDateRes[0]
        // setdateDisabled(formatedMeeting)
        setdateDisabled(formattedDate)
    }
    console.log("Disabled Date: ", dateDisabled)
   

    return (
        <section className='-ml-4'>
            <DayPicker
                animate
                mode="multiple"
                disabled={disableDates}
                classNames={{
                    today: `bg-purple-800 text-white rounded-full`,
                    todayHighlighted: "border-purple-300 text-white rounded-full ", // Add a border to today's date
                    selected: `bg-purple-500 border-amber-500 text-white rounded-full`, // Highlight the selected day
                    root: `${defaultClassNames.root} shadow-lg p-5`, // Add a shadow to the root element
                    chevron: `${defaultClassNames.chevron} fill-amber-500`,
                    // chevron: `${defaultClassNames.chevron} fill-amber-100`
                }}
                selected={selectedDate}
                onSelect={setSelectedDate}
                defaultMonth={new  Date()}
                onDayClick={(day) => {
                    if (!day) {
                        setSelectedDate(day)
                        setSelectedMeetingDate(day.toDateString())
                    }
                }}
                // footer= {selectedDate?.length ? selectedDate.map(d => d.toDateString()).join(",") : "No date selected"}
                
            />
            <div className='pt-4 ml-6 -mb-0.5 md:ml-6'>
                <span className={`text-neutral-400`}>Selected Date: {selectedDate?.length ? selectedDate.map(d => d.toDateString()).join(", ") : ""}</span>
            </div>
            <div className='flex pt-8 ml-5 md:ml-5 gap-3 text-white'>
                <button type="submit" onClick={() => setismodalOpen(true)} className={`w-44 p-2 text-black bg-white hover:scale-105 hover:bg-purple-500 hover:text-white rounded-xl transition-all duration-200 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-600 inline-block [--tw-text-opacity:1]
                active:bg-purple-600 active:text-white focus:text-white focus:bg-purple-600
                ${pressed
                    ? 'focus:bg-purple-600 active:bg-purple-600'
                    : "bg-white active:text-white"
                }
                `}>
                    Save you date
                </button>
                <span className={`md:pt-1 text-white`}>
                    <Calendar/>
                </span>
            </div>
            <AdminModalCalendar open={modalOpen} onClose={() => setismodalOpen(false)}>
                <div onClick={(e) => e.stopPropagation()} className='text-center w-86'>
                    <p className='font-black text-neutral-400'>This is the date that you're reserving:  
                    <span className='text-white'> {selectedDate?.length ? selectedDate.map(d => d.toDateString()).join(", ") : ""}
                    </span></p>
                    <div className="flex justify-center mt-4 gap-4">
                        <button
                            className={`w-20 p-2 text-white bg-purple-500 hover:scale-105 hover:bg-purple-700 hover:text-white rounded-xl transition-all duration-200 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-600 inline-block [--tw-text-opacity:1]
                                active:bg-purple-600 active:text-white focus:text-white focus:bg-purple-600
                                ${pressed
                                    ? 'focus:bg-purple-600 active:bg-purple-600'
                                    : "bg-purple-600 active:text-white"
                                }
                                `}
                            onClick={() => {
                                handleSubmit();          // actually send data
                                setismodalOpen(false);   // close modal
                            }}
                        >
                            Confirm
                        </button>
                        <button
                            type='button'
                            className={`w-20 p-2 text-white bg-neutral-600 hover:scale-105 hover:bg-neutral-400 hover:text-white rounded-xl transition-all duration-200 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-neutral-600 inline-block [--tw-text-opacity:1]
                                active:bg-purple-600 active:text-white focus:text-white focus:bg-neutral-600
                                ${pressed
                                    ? 'focus:bg-purple-600 active:bg-purple-600'
                                    : "bg-neutral-600 active:text-white"
                                }
                                `}
                            onClick={() => setismodalOpen(false)} // cancel
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </AdminModalCalendar>
        
            
            
        </section>
    )
}