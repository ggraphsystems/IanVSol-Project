// import { loadRenderers } from 'astro:container'
import { useState, useEffect } from 'react'
import { ClipLoader } from "react-spinners"
import Modal from './ModalEmail';

export default function ContactFormService() {
    const [instagram, setInstagram] = useState("")
    const [form, setForm] = useState({
        fullname:"",
        phoneNumber: "",
        email: "",
        message: ""
      });
    

    const isFormIncomplete = Object.values(form).some(value => value.trim() === "");
    // loader submit buttton
    const [loading, setLoading] = useState(false)
    
    // button touch in screens
    const [pressed, setisPressed] = useState(false) 

    // Modal state
    const [modalOpen, setismodalOpen] = useState(false)
    
    const [timeoutId, setTimeoutId] = useState(null)


    const handleSubmit = async e => {
        e.preventDefault()
        console.log(form.fullname, form.phoneNumber, form.instagram, form.email, form.message)
        setLoading(true)
        try {
            const response = await fetch("https://adg4x2g63h.execute-api.us-east-2.amazonaws.com/prod/send-email", {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    name:form.fullname,
                    subject:form.email,
                    phone:form.phoneNumber,
                    instagram:instagram,
                    message:form.message
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            window.alert("Thanks for reaching out! I'll be contacting you as soon as possible!")    
            
            setLoading(false)
            setismodalOpen(true)
            const result = await response.json();
            console.log(result)

            
          } catch (error) {
            console.log(error)
            setLoading(false)
          } 
          setTimeout(() => {
            setForm(
                {
                    fullname:"",
                    phoneNumber: "",
                    email: "",
                    message: ""}
                )
            setInstagram("")
          }, 800)
        // finally{
        //     console.log("Operation finish")
        //   }
    }

    

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
                Data <span className="text-neutral-600">(required)</span>
              </h1>
  
              {/* Name Fields */}
              <div className="lg:flex gap-12">
                <div className="ml-1 md:ml-0 grid">
                  <label className="text-sm font-bold">Full Name: <span className="text-neutral-600 hover:text-neutral-400">(required)</span> </label>
                  <input
                    className="pt-4 w-80 lg:w-103 2xl:w-130 bg-black border-b border-neutral-500 focus:outline-none focus:border-white"
                    type="text"
                    id="fullname"
                    value={form.fullname}
                    onChange={e => setForm({...form, fullname: e.target.value})}
                  />
                </div>
              </div>
  
              {/* Email Field */}
              <div className="ml-1 md:ml-0 grid">
                <label className="text-sm font-bold">
                  Phone Number: <span className="text-neutral-600 hover:text-neutral-400">(required)</span>
                </label>
                <input
                  className="pt-4 w-80 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white"
                  type="number"
                  id="number"
                  value={form.phoneNumber}
                  onChange={e => setForm({...form, phoneNumber: e.target.value})}
                />
              </div>
              <div className="ml-1 md:ml-0 grid">
                <label className="text-sm font-bold">
                  Instagram: <span className="text-neutral-600 hover:text-neutral-400">(optional)</span>
                </label>
                <input
                  className="pt-4 w-80 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white"
                  type="text"
                  id="instagram"
                  name="instagram"
                  value={instagram}
                  onChange={e => setInstagram(e.target.value)}
                />
              </div>
              <div className="ml-1 md:ml-0 grid">
                <label className="text-sm font-bold">
                  Email: <span className="text-neutral-600 hover:text-neutral-400">(required)</span>
                </label>
                <input
                  className="pt-4 w-80 lg:w-103 2xl:w-130 bg-transparent border-b border-neutral-500 focus:outline-none focus:border-white"
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                />
              </div>
  
              {/* Message Field */}
              <div className="grid ml-1 md:ml-0">
                <label className="pt-4 text-sm font-bold mb-2">
                  Message: <span className="text-neutral-600 hover:text-neutral-400">(required)</span>
                </label>
                <textarea
                  className="bg-transparent w-80 lg:w-105 2xl:w-126 px-1 h-20 border border-neutral-700 focus:outline-none focus:border-white"
                  id="message"
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                ></textarea>
                <span className="text-neutral-600 text-sm ml-83 sm:ml-96 md:ml-72 lg:ml-98 2xl:ml-120">
                  →
                </span>
              </div>
  
              {/* Submit Button */}
              <div className="grid ml-1 md:ml-0">
              <button
                    onClick={() => {
                      setTimeout(() => {
                        setismodalOpen(true)
                      }, 1500)
                    }}
                    disabled={isFormIncomplete}
                    type="submit"
                    onTouch
                    className={`w-24 p-2 bg-white hover:bg-purple-500 hover:scale-105 transition-transform text-black hover:text-white rounded-2xl
                        ${pressed
                            ? 'focus:bg-purple-600 active:bg-purple-600'
                            : "bg-white active:text-white"
                        }
                        ${isFormIncomplete
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
                {/* <button className='bg-white text-black hover:scale-105 transition-transform p-3'
                
                >Test modal
                  
                </button> */}
                <Modal open={modalOpen} onClose={() => setismodalOpen(false)}>
                    <div className='text-center w-86'>
                        <p className='font-black text-white'>Thank you so much for reaching out, I'll be contacting you in the next couple of days!</p>
                    </div>
                </Modal>
              </div>
              
            </div>
          </form>
        </div>
      </section>
        
    )
} 