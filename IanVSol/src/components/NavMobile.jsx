// import { route } from "./routes"
// import { useRef } from "react"
import { useState } from "react"
import Hamburger from "hamburger-react";

// import {AnimatePresence, motion} from "framer-motion"


export default function MobileNavbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="bg-amber-50 p-4">
      <Hamburger toggled={isOpen} toggle={setOpen} size={32} />
    </div>
  );
}