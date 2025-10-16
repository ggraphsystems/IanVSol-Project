
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
          <h1 className="cursor-pointer text-3xl font-bold sm:pl-2">IanVSol</h1>
      </div>
      <Hamburger toggled = {isOpen} toggle={setOpen} size={20} />
      <AnimatePresence>
          {isOpen && (
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:0.2}}
            className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0"
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
                      <a onClick={() => setOpen(false)} className="p-2 pl-5 pr-5 rounded-2xl bg-neutral-800" href={href}>
                        <span className="flex gap-1 text-base">
                          {title}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              {/* <div className="text-white fixed left-2 shadow-4xl right-0 top-[1.5rem] p-5">
              </div> */}
            </motion.div>
            
          )}  
      </AnimatePresence>
    </div>
  )
  
}