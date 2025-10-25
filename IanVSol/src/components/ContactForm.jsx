'use client'

import { set } from 'astro/zod'
import { loadRenderers } from 'astro:container'
import { useState, useEffect } from 'react'
import { ClipLoader } from "react-spinners"

export default function ContactForm() {
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [instagram, setInstagram] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [laoding, setLoading] = useState(true)
    
    
    // useEffect(() => {
    //     const sendEmail = async () => {
            
    //     };
    //     sendEmail();
    // }, []);

    const handleSubmit = async e => {
        e.preventDefault()
        console.log(name, lastname, phoneNumber, instagram, email, message)
        try {
            const response = await fetch("https://adg4x2g63h.execute-api.us-east-2.amazonaws.com/prod/send-email", {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    name:name,
                    lastname:lastname,
                    subject:email,
                    phone:phoneNumber,
                    instagram:instagram,
                    message:message
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
                
            }
            if (response.ok) {
                window.alert("Thanks for reaching out! I'll be contacting you as soon as possible!")    
            }
            
            const result = await response.json();
            console.log(result)
            
        } catch (error) {
            console.log(error)
        }
        const handleSend = () => {
            window.alert("Thanks for send me a message! I'll be reaching you in three days as soon as posible!")
            setName('')
            setLastname('')
            setPhoneNumber('')
            setInstagram('')
            setEmail('')
            setMessage('')
        }
    }

    

    // useEffect(()=>{
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 2000);
    // }, [])


    


    

    return (
        <section className="pt-40 mx-auto max-w-sm overflow-hidden rounded-xl shadow-md sm:max-w-md md:max-w-3xl lg:max-w-6xl 2xl:max-w-6xl">
        <div className="px-3 grid md:grid-cols-2 gap-16 lg:mr-18 item-center">
          {/* Contact Information */}
          <div className="ml-1 md:ml-0 md:pl-10 lg:pl-25 2xl:pl-5">
            <ul>
              <li className="font-mono text-neutral-500 pt-6 md:px-5 md:pl-1 lg:px-20 2xl:px-40">
                iannvvsol@gmail.com
              </li>
              <li className="font-mono text-neutral-500 pt-6 md:px-5 md:pl-1 lg:px-20 2xl:px-40">
                8371-8307
              </li>
              <li className="font-mono text-neutral-500 pt-6 md:px-5 md:pl-1 lg:px-20 2xl:px-40">
                San Jose, Costa Rica
              </li>
            </ul>
          </div>
  
          {/* Form Section */}
          <form onSubmit={handleSubmit}>
            <div className="font-mono text-sm space-y-6 pt-6 sm:px-2 md:px-3 lg:px-1 2xl:px-10 text-white">
              <h1 className="ml-1 md:ml-0 text-xl font-bold">
                Name <span className="text-neutral-600">(required)</span>
              </h1>
  
              {/* Name Fields */}
              <div className="lg:flex gap-12">
                <div className="ml-1 md:ml-0 grid">
                  <label className="text-sm font-bold">First Name:</label>
                  <input
                    className="pt-4 w-80 lg:w-45 2xl:w-53 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white"
                    type="text"
                    id="first-name"
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="ml-1 md:ml-0 grid">
                  <label className="text-sm font-bold">Last Name:</label>
                  <input
                    className="pt-4 w-80 lg:w-45 2xl:w-70 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white"
                    type="text"
                    id="last-name"
                    onChange={e => setLastname(e.target.value)}
                  />
                </div>
              </div>
  
              {/* Email Field */}
              <div className="ml-1 md:ml-0 grid">
                <label className="text-sm font-bold">
                  Numero: <span className="text-neutral-600">(required)</span>
                </label>
                <input
                  className="pt-4 w-80 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white"
                  type="number"
                  id="number"
                  onChange={e => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="ml-1 md:ml-0 grid">
                <label className="text-sm font-bold">
                  Insta: <span className="text-neutral-600">(optional)</span>
                </label>
                <input
                  className="pt-4 w-80 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white"
                  type="text"
                  id="instagram"
                  name="instagram"
                  onChange={e => setInstagram(e.target.value)}
                />
              </div>
              <div className="ml-1 md:ml-0 grid">
                <label className="text-sm font-bold">
                  Email: <span className="text-neutral-600">(required)</span>
                </label>
                <input
                  className="pt-4 w-80 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white"
                  type="email"
                  id="email"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
  
              {/* Message Field */}
              <div className="grid ml-1 md:ml-0">
                <label className="pt-4 text-sm font-bold mb-2">
                  Message: <span className="text-neutral-600">(required)</span>
                </label>
                <textarea
                  className="bg-transparent w-80 lg:w-105 2xl:w-126 px-1 h-20 border border-neutral-700 focus:outline-none focus:border-white"
                  id="message"
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
                <span className="text-neutral-600 text-sm ml-83 sm:ml-96 md:ml-72 lg:ml-98 2xl:ml-120">
                  →
                </span>
              </div>
  
              {/* Submit Button */}
              <div className="grid ml-1 md:ml-0">
              <button
                    type="submit"
                    className="w-24 p-2 bg-white hover:bg-purple-500 hover:scale-105 transition-transform text-black hover:text-white rounded-2xl active:bg-purple-600 active:text-white focus:text-white focus:bg-purple-600"
                    onClick={() => handleSend()}
                    >
                    SUBMIT →

                    </button>
                {/* <div>

                {
                    laoding ? (
                        <ClipLoader color='#36D7B7' loading={loading} size={20}/>
                    ) : (
                        <button
                            type="submit"
                            className="w-24 p-2 bg-white hover:bg-purple-500 hover:scale-105 transition-transform text-black hover:text-white rounded-2xl active:bg-purple-600 active:text-white focus:text-white focus:bg-purple-600"
                            onClick={() => handleSend()}
                            >
                            SUBMIT →

                        </button>
                    )
                }
                </div> */}
                
              </div>
            </div>
          </form>
        </div>
      </section>
        
    )

} 