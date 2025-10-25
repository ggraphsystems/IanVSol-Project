
import { useState } from "react"
import Hamburger from "hamburger-react";
import { useClickAway } from "react-use";
import { useRef } from "react"
import { AnimatePresence, motion} from 'framer-motion';
import { route } from "./RoutesNavBar";

export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false)
  const menuRef = useRef(null);

  useClickAway(menuRef, () => setOpen(false));

  return (
    <div ref={menuRef} className="md:hidden flex items-center justify-end px-2 py-4 text-white ">
      <div className="flex-1 ml-3">
          <h1 className="cursor-pointer text-3xl font-bold sm:pl-2">Ian V Sol</h1>
      </div>
      <Hamburger toggled = {isOpen} toggle={setOpen} size={20} />
      <AnimatePresence>
          {isOpen && (
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:0.2}}
            className="fixed left-0 shadow-4xl right-0 top-[4.5rem] bg-black p-5 pt-0"
            >
                <ul className="grid gap-2">
                  {route.map(({title, href, idx}) =>(
                    <motion.li 
                    initial={{scale:0, opacity:0}}
                    animate={{scale:1, opacity:1}}
                    transition={{
                      type:"spring",
                      stiffness: 260,
                      damping:20,
                      delay:0.1 + idx / 10,
                    }}
                    key={href} 
                    className="flex justify-center">
                      <a onClick={() => setOpen(false)} className="p-3 pl-5 w-50 pr-5 rounded-2xl bg-neutral-800 hover:bg-purple-500 hover:scale-105 hover:text-white transition-transform
                      active:bg-purple-600 active:text-white focus:text-white focus:bg-purple-600
                      " href={href}>
                        <span className="ml-14 text-base">
                          {title}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                  <div className="flex items-center justify-center">
                      <button className="bg-white p-3 pl-5 w-50 pr-5 text-black rounded-2xl hover:bg-purple-500 hover:scale-105 hover:text-white transition-transform active:bg-purple-600 active:text-white focus:text-white focus:bg-purple-600">
                       Contact
                      </button>
                  </div>
                </ul>
              {/* <div className="text-white fixed left-2 shadow-4xl right-0 top-[1.5rem] p-5">
              </div> */}
            </motion.div>
            
          )}  
      </AnimatePresence>
    </div>
  )
  
}