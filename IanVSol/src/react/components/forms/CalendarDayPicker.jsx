import ModalCalendar from '../ModalCalendar';
import { useState } from 'react'
import { Day, DayPicker, getDefaultClassNames } from "react-day-picker"
import "react-day-picker/style.css"
import {Calendar}  from 'feather-icons-react'



export default function CalendarDatePicker({selectedDate, setSelectedDate}) {
    const [modalOpen, setismodalOpen] = useState(false)
    const defaultClassNames = getDefaultClassNames();
    const modifers = {selected: selectedDate};
    if (selectedDate) {
        modifers.selected = selectedDate;
    }

    return (
        <section>
            <div className='flex pt-3 ml-5 md:ml-0 gap-3 text-white'>
                <button onTouch onClick={() => setismodalOpen(true)} className={`w-44 p-2 text-black bg-white hover:text-white rounded-xl transition-all duration-200 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-600 inline-block [--tw-text-opacity:1]
                active:bg-purple-600 active:text-white focus:text-white focus:bg-purple-600`}>
                    Schedule Meeting Date    
                </button>
                <span className={`pt-3 text-white`}>
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
                selected={selectedDate}
                onSelect={setSelectedDate}
                defaultMonth={new  Date()}
                modifers={modifers}
                onDayClick={(day, modifers) => {
                    if (modifers.selected) {
                        setSelectedDate(undefined);
                    } else {
                        setSelectedDate(day)
                        setSelectedMeetingDate(day.toDateString())
                        setismodalOpen(false);
                    }
                }}
                footer={
                    selectedDate ? `You selected: ${selectedDate?.toDateString()}` : "Pick a day."
                }
            />
            </ModalCalendar>
            <div className='pt-4 ml-6 -mb-0.5 md:ml-1'>
                <span className={`text-neutral-400 `}>Selected Date: {selectedDate?.toDateString()}</span>
            </div>
            
        </section>
    )
}