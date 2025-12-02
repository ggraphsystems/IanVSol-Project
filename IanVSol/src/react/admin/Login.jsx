import {Eye, EyeOff}  from 'feather-icons-react'
import TextInput from "../components/forms/TextInput"
import { useEffect, useState } from "react"
import supabase from '../supabase-client'
import AdminModalCalendar from './components/AdminModalCalendar'

export default function Login() {
    const [modalOpen, setismodalOpen] = useState(false)
    const [pressed, setisPressed] = useState(false)
    const [loginForm, setLoginForm] = useState({
        email:"",
        password:""
    })
        
    const handleSubmit = () => {
        console.log(loginForm.email)
        console.log(loginForm.password)
        signInUser()
    }

    useEffect(() => {
        supabase.auth.getSession().then(({data: {session}}) => {
            if (session) window.location.href = "/admin/AdminIan"
        })
    }, [])

    const signInUser = async () => {
        const { data, error} = await supabase.auth.signInWithPassword({
            email: loginForm.email,
            password: loginForm.password,
        })
        if (error) {
            console.log("There's an error while trying to login: ", error)
            setismodalOpen(true)
        } else{
            console.log("Login Successfully!", data)
            window.location.href = "/admin/AdminIan"
        }
    }


    return (
        <section className="pt-15 md:pt-25 text-white mx-auto max-w-sm overflow-hidden rounded-xl shadow-md sm:max-w-md md:max-w-3xl lg:max-w-6xl 2xl:max-w-6xl">
            <div className="font-mono ml-9 md:ml-50 lg:ml-85 2xl:ml-85 text-sm space-y-6 sm:px-2 md:px-1 lg:px-0 text-white">
                    <h3
                    className="text-3xl sm:text-4xl mb-20 md:mb-5 ml-2 md:ml-1 text-white lg:ml-0 md:text-4xl font-bold"
                    >
                    Owner Admin
                    </h3>
                    <p
                    className="w-80 md:w-112 md:mb-7 -mb-15 lg:-mb-6 md:ml-0 md:w-base text-neutral-300 px-2 pb-30 md:pb-1 lg:pb-10 text-sm md:text-sm 2xl:w-lg lg:-ml-1 text-text-secondary-light dark:text-text-secondary-dark"
                    >
                    Your information and the status of you page is save with us, if you have any problem to login feel free to reach us. <a href="" className="text-blue-800 hover:text-blue-700 underline">G-Graph Systems technical support</a>
                    </p>
                    <p className="text-neutral-500">Best regards! G-Graph Systems team.</p>
            </div>
            <div className="pt-10 grid ml-9 md:ml-50 lg:ml-85 2xl:ml-85 md:grid-cols-2 gap-16 item-center">
                <form>
                    <TextInput
                        label="Email"
                        type="email"
                        name="email"
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                    />
                    <TextInput
                        label="Password"
                        type={`${!loginForm.password ? "text" : "password"}`}
                        name="password"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                        icons={`${loginForm.password ? "text" : "password"}`}
                    />
                    <div className="pt-10 md:ml-17 lg:ml-18 2xl:ml-25 lg:gap-1 2xl:gap-1 md:gap-22 mb-2 md:grid md:grid-cols-2">
                        <button
                            type="button"
                            onClick={signInUser}
                            className={`w-30 p-3 ml-1 text-white bg-neutral-900 hover:scale-105 hover:bg-neutral-800 hover:text-white rounded-xl transition-all duration-200 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 inline-block [--tw-text-opacity:1]
                                active:bg-purple-600 active:text-white focus:text-white focus:bg-purple-600
                                 ${pressed
                                    ? 'focus:bg-purple-600 active:bg-purple-600'
                                    : "bg-neutral-600 active:text-white"
                                }
                                `}>
                                Log in
                        </button>
                        <a
                            href='/'
                            className={`w-30 ml-3 p-3 pl-7 text-black bg-neutral-100 hover:scale-105 hover:bg-purple-600 hover:text-white rounded-xl transition-all duration-200 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 inline-block [--tw-text-opacity:1]
                                active:bg-purple-600 active:text-white focus:text-white focus:bg-purple-600
                                ${pressed
                                    ? 'focus:bg-purple-600 active:bg-purple-600'
                                    : "bg-neutral-100 active:text-black"
                                }
                                `}>
                                Ian V Sol
                        </a>
                    </div>
                </form>
                 <AdminModalCalendar open={modalOpen} onClose={() => setismodalOpen(false)}>
                    <div onClick={(e) => e.stopPropagation()} className='text-center w-86'>
                        <p className='font-black text-white'>Something went wrong, check you email and password.</p>
                        <div className="flex justify-center mt-4 gap-4">
                            <button
                                type='button'
                                className={`w-25 p-2 text-white bg-neutral-600 hover:scale-105 hover:bg-neutral-400 hover:text-white rounded-xl transition-all duration-200 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-neutral-600 inline-block [--tw-text-opacity:1]
                                    active:bg-neutral-600 active:text-white focus:text-white focus:bg-neutral-600 
                                    ${pressed
                                        ? 'focus:bg-purple-600 active:bg-purple-600'
                                        : "bg-neutral-600 active:text-white"
                                    }
                                    `}
                                onClick={() => setismodalOpen(false)} // cancel
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                </AdminModalCalendar>
            </div>
        </section>
    )    
}