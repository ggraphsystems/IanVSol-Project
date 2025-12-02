import { useEffect, useState } from "react";
import AdminCalendarDatePicker from "./components/AdminCalendarDayPicker"; 
import supabase from "../supabase-client";
import {Calendar}  from 'feather-icons-react'
import ModalCalendar from "../components/ModalCalendar";
import AdminModalCalendar from "./components/AdminModalCalendar";

export default function Admin() {
    const [selectedMeetngDate, setSelectedMeetingDate] = useState(undefined)
    const [dateDisabled, setdateDisabled] = useState([])
    const meetingList = []
    const [modalOpen, setismodalOpen] = useState(false)

    const [pressed, setisPressed] = useState(false)

    useEffect(() => {
        supabase.auth.getSession().then(({data: {session}}) => {
            if (!session) window.location.href = "/admin/AdminLogin"
        })
    }, [])

    useEffect(() => {
       getMeetingDates()
    }, [])

    const handleSubmit = (e) =>  {
        e.preventDefault()
        addMeetingDate_toSupaBase()
    }
    
    const handleDelete = () =>  {
        deleteDates()
    }
    
    const handleLogout = async () =>  {
        const {error} = await supabase.auth.signOut();
        if (error) {
            console.log("There was an error try to login out: ", error)
        } else {
            console.log("Logged out successfully")
            window.location.href = "/"
        }
    }


    const addMeetingDate_toSupaBase = async () => {
        // selectedMeetngDate alwasys needs to be a list in order to be able to send this information like this
        const rowsToInsert = selectedMeetngDate.map(d => ({
            date: d.toDateString()
        }))
        
        const {data, error} = await supabase
            .from("CalendarDates")
            .insert(rowsToInsert)

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
    
    const deleteDates = async () => {
        const {data, error} = await supabase.from("CalendarDates").delete().neq("id", 0);
        if (error) {
            console.log("we got and error deleting the date: ", error)
        } else {
            console.log("data deleted successfully, ", data)
            window.location.reload()
        }
    }

    return(
        <section className="mx-auto max-w-sm overflow-hidden rounded-xl shadow-md sm:max-w-md md:max-w-3xl lg:max-w-6xl 2xl:max-w-6xl">
            <div className="-mb-10">
                <button
                        type="submit"
                        onClick={handleLogout}
                        className={`w-40 ml-60 md:ml-150 lg:ml-230 2xl:ml-245 p-2 mt-8 text-white bg-black hover:scale-105 hover:bg-black hover:text-white rounded-xl transition-all duration-200 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-black inline-block [--tw-text-opacity:1]
                            active:bg-black active:text-white focus:text-white focus:bg-black`}>
                            Log Out
                </button>
            </div>
            <section className="pt-25 md:pt-40 mx-auto max-w-sm overflow-hidden rounded-xl shadow-md sm:max-w-md md:max-w-3xl lg:max-w-6xl 2xl:max-w-6xl">
                <div className="px-2 ml-6 grid lg:ml-10 md:grid-cols-2 gap-16 lg:mr-1 item-center">
                    
                    <div className="font-mono text-sm space-y-6 sm:px-2 md:px-1 lg:px-0 2xl:px-10 text-white">
                        <h3
                        className="text-2xl sm:text-4xl mb-20 md:mb-5 ml-2 md:ml-1 text-white lg:ml-0 md:text-4xl font-bold"
                        >
                        HI Ian, Welcome Back!
                        </h3>
                        <p
                        className="w-80 md:mb-7 -mb-15 lg:-mb-6 md:ml-0 md:w-base text-neutral-300 px-2 pb-30 md:pb-1 lg:pb-10 text-sm md:text-sm 2xl:w-lg lg:-ml-1 text-text-secondary-light dark:text-text-secondary-dark"
                        >
                        Remember, you can save here all the dates in where you are not able to get a meeting with someone.
                        </p>
                    <form onSubmit={handleSubmit}>
                        <AdminCalendarDatePicker
                            selectedDate={selectedMeetngDate}
                            setSelectedDate={setSelectedMeetingDate}
                            dateDisabled={dateDisabled}
                            setdateDisabled={setdateDisabled}
                        />
                    </form>
                    </div>
                    
                    <div className='-ml-8 text-neutral-400 md:ml-10'>
                        <h2 className="text-2xl pt-20 pb-10 font-mono text-white w-md ml-7 md:ml-0 px-2 py-1 text-left"> Disabled Dates:</h2>
                        <div className="pt-0 ml-10 md:ml-2 overflow-x-auto overflow-y-auto border-gray-900 bg-black rounded  max-h-94 md:border scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-100">
                            <table className="">
                                {Array.from({ length: Math.ceil(dateDisabled.length / 3) }).map((_, rowIndex) => (
                                <tr key={rowIndex}>
                                {dateDisabled
                                    .slice(rowIndex * 3, rowIndex * 3 + 3)
                                    .map((item, colIndex) => (
                                    <td key={colIndex} className="border border-gray-300 w-25 px-1 py-2 sm:w-25 sm:px-2 sm:py-1 md:w-lg md:px-2 md:py-2">
                                        {item}
                                    </td>
                                    ))}
                                </tr>
                            ))}
                            </table>
                        </div>
                    <button
                        type="button"
                        onClick={() => {
                            setismodalOpen(true)
                        }}
                        className={`w-40 ml-10 md:ml-2 p-2 mt-8 text-black bg-white hover:scale-105 hover:bg-red-600 hover:text-white rounded-xl transition-all duration-200 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-700 inline-block [--tw-text-opacity:1]
                            active:bg-red-600 active:text-white focus:text-white focus:bg-red-600
                            ${pressed
                                ? 'focus:ring-red-700 active:bg-red-600'
                                : "bg-white active:text-white"
                            }
                            `}>
                            Reset
                    </button>

                    <AdminModalCalendar open={modalOpen} onClose={() => setismodalOpen(false)}>
                        <div className='text-center w-86'>
                            <p className='font-black text-white'>You are going about to delete you reserved dates, do you wanna continue?</p>
                            <div className="flex justify-center mt-4 gap-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        handleDelete()
                                        setismodalOpen(false)
                                    }}
                                    className={`w-20 p-2 text-white bg-red-500 hover:scale-105 hover:bg-red-600 hover:text-white rounded-xl transition-all duration-200 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 inline-block [--tw-text-opacity:1]
                                        active:bg-red-600 active:text-white focus:text-white focus:bg-red-600
                                        ${pressed
                                            ? 'focus:ring-red-700 active:bg-red-600'
                                            : "bg-red-500 active:text-white"
                                        }
                                        `}>
                                        Delete
                                </button>
                                <button
                                    type="button"
                                    onPointerDown={(e) => {
                                        e.stopPropagation()
                                        setismodalOpen(false)
                                    }}
                                    className={`w-20 p-2 text-white bg-neutral-600 hover:scale-105 hover:bg-neutral-400 hover:text-white rounded-xl transition-all duration-200 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-neutral-600 inline-block [--tw-text-opacity:1]
                                    active:bg-neutral-600 active:text-white focus:text-white focus:bg-neutral-600
                                    ${pressed
                                        ? 'focus:ring-purple-600 active:bg-purple-600'
                                        : "bg-neutral-600 active:text-white"
                                    }
                                    `}>
                                        Cancel
                                </button>
                            </div>
                        </div>
                    </AdminModalCalendar>
                    </div>
                </div>
            </section>
        </section>
    )
}